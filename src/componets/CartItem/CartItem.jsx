import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css' // Importa el archivo CSS

const CartItem = ({ id, title, price, quantity }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div className="CartItem">
      <div className="CartItem-details">
        <h3>{title}</h3>
        <p>Precio: S/.{price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
      <button onClick={handleRemoveFromCart} className="CartItem-remove">
        Quitar del Carrito
      </button>
    </div>
  );
};

export default CartItem;