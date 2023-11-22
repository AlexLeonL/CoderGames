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
        <img src="https://lh3.googleusercontent.com/pw/ADCreHfH_sJmXTlLwbstSjoedSy752KZBGf8SW9iu-zhs4B9zRjps8EnwP4FAy4GlVvWQWd6bX_cMzrCqf9p5qc6mV7Tx9kZ34HBA4txob1s5aEWKl6UJFcasUPqYakTd5JE638R6R4Nj8Rr7O5GcC8oqzRS362zhcwN_icacx9M_pOCYaV9gY4qESx81ZYWfVNxq0abeg8xrhMkehJ8Acrfp8dZ4gTwkTY_glsn-MZcVh71OWmtvWe3-VHI-sTE060VnEbwANoXgu3yTxv44zR8WR25Ei_Ghx_n0ZcKn8XN8zNJWbCReVKKfg3fdgZc4DhmxnwToFqOmGs3kIg-hyULAo-k2bacT75R6Xf5YF4-4bouDMBdC_HkwMyRil8SrBUtJMcCiQgjm7xx4H4dHjoPgv57Jw6rRN_cwP2lBE4ej3cRjikMs7rPimNCMyIHHE25_1VEXwwsTXK-5Fk6TxrXpalNVm4Be5U4uULE2x4Bo_D5mOtG7gTrsEyJcYNr__cXfQCzSoxYXslv8OKD27Ru7fppNlQMkCq7TFQuiPpWArbwGUhOPykvdE-LDli1YTU3TW6KwSo-4SFXnv0BDQs2oPBrv-PTjhLulaSmqQCkF-e5xhxSN94YmrrzcS1kWjbVXuxSgYwuVVCbuxl5cYk3ddhN5lbsSp5C2Kv4R1cJ7GqU6xsOfKTEDArhBqV1X5pbNUiYUNRzNt1OGEY8T7fBIpoSzF2JCvpqsCbC5qoIpsgxSKrdp03K27_7B9dvaF1W1AnVHeWK6m94AuBEFtOCSOu4dLyDZQ6LE6I4ZnEcg0ZtviZnbxiADJHaIVDmOA-aO0JKwqgkhXtxO4FapaGP59LJesfmz5G2u0BD8KXVd7Y1fhtSJuuCyotyEItbX8DF1uqBcTpiqE3GPoi7HArPmg=w96-h96-s-no-gm?authuser=0" />
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