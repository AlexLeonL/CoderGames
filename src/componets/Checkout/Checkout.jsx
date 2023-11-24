import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
import ContactForm from "../ContactForm/ContactForm"

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const createOrder = async (userData) => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone,
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(),'in',ids))
        
            const { docs } = await getDocs(productsRef)
    
            docs.forEach(documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields })
                }
            })
    
            if(outOfStock.length === 0) {
                const ordersRef = collection(db, 'orders')
                const { id } = await addDoc(ordersRef, objOrder)
                batch.commit()
                clearCart()
                setOrderId(id)
                console.log(`El id de su orden es ${id}`)
            } else {
                console.log('No hay stock de algun producto')
            }
        } catch (error) {
            console.error('Hubo un error generando la orden')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return(
        <div><h1>Se esta generando su Orden...</h1>
        <div id='loader-wrapper'>
        <div id="loader"></div>
        <div className='loader-section section-left'></div>
        <div className='loader-section section-right'></div>
         </div></div>       
        ) 
    }

    if(orderId) {
        return (
            <>
            <div className="ff-container-form">
                <div className="ff-s1">
                <div className="ff-s0">
        <div className="f-user"><img src="https://alexleon.pw/img/mario.png" className="f-img"/><div className="ff-text"><p>El id de su orden es:</p>&nbsp;&nbsp;<p className="f-order">{orderId}</p></div></div>
        </div></div>
       <button className="btn-final">
      <Link to="/">← Gracias por realizar tu compra, desesas realizar una compra nueva</Link>
    </button>
        </div>
        </>
        )
    }

    if (cart.length === 0) {
        return (
            <div className="container-cart">
        <p>No hay productos en el carrito</p>
        <div className="cart-img">
        <img src="https://alexleon.pw/img/agregar.png" />
        </div>
        <button className="buttonz">
      <Link to="/">← Añadir Productos</Link>
    </button>
      </div>
        );
    }

    return (
        <>
         <ContactForm onCreate={createOrder}/>
        </>
    )
}

export default Checkout