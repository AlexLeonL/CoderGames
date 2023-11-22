import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const Cart = () => {
    const { cart } = useCart()

     // Función para calcular el total por producto
  const getTotalPerProduct = (product) => {
    return product.price * product.quantity;
  };

  // Función para calcular el total general del carrito
  const getTotalGeneral = () => {
    let totalGeneral = 0;

    cart.forEach((prod) => {
      totalGeneral += getTotalPerProduct(prod);
    });

    return totalGeneral.toFixed(2);
  };

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
    <div className="container-cart">
        <div className="cart-title"><p>Carrito de Compras</p></div>
        <div className="cart-s0">
        <div className="cart-s1">
        {cart.map((prod) => {
          const totalPerProduct = getTotalPerProduct(prod);

          return (
            <div key={prod.id} className="cart-s2">
      <div className="cart-s3">
        <img src={prod.img} alt={prod.name} />
      </div>
      <div className="cart-s2-title">
        <p>{prod.name}</p>
      </div>
      <div className="cart-s4">
        <p>Precio: {prod.price}</p>
        <p>Cantidad: {prod.quantity}</p>
        <p>Total: ${totalPerProduct}</p>
       
      </div>
    </div>
          );
        })}
        </div>
        <div className="cart-s5">
      <p>Total General: ${getTotalGeneral()}</p>
      <div className="cart-s6">
      <button className="buttonz">
      <Link to="/checkout">Finalizar Compra</Link>
      </button>
      <button className="buttonz">
      <Link to="/">← Seguir Comprando</Link>
    </button>
      </div></div>
      
    </div></div>
  );
};

export default Cart;