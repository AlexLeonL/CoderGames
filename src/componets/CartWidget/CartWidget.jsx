import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return (
        <div className='cart-shop-s0'>
            <div>
        <button onClick={() => navigate('/cart')} className='cart-shop-s1'>
        <img src="https://alexleon.pw/img/cartt.png" alt="cart" className='btn-d'/>
        </button></div>
         <div>  <p className='c-shop'>{totalQuantity}</p>
        </div></div>
    )
}

export default CartWidget