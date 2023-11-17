import cart from './assets/cart.svg';
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/cart')}>
        <img src={cart} alt="" className='btn-d'/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget