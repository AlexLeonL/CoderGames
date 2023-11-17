import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationContext'
import Navbar from './componets/NavBar/Navbar'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import Cart from './componets/Cart/Cart'
import Checkout from './componets/Checkout/Checkout'
import Footer from './componets/Footer/Footer'

const App = () => {

  return (
    <>
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Listado de productos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/checkout' element={<Checkout />}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </>
  )
}

export default App