import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../notification/NotificationContext";
import { Link } from "react-router-dom";

const ButtonBuy = () =>{
  return(
   <div className="cart-content-buy ">
    <div className="cart-content-buy-s1">
      <p>☰ Resumen de Compra</p>
    </div>
    <button className="buttonz">
 <Link to="/cart">✔ Finalizar Compra</Link>
    </button>
    <button className="buttonz">
      <Link to="/">← Seguir Comprando</Link>
    </button>
   </div> 
  )
}

const InputCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const handleChange = (e) => {
    if (e.target.value <= stock) {
      setCount(e.target.value);
    }
  };

  return (
    <div>
      <input type="number" onChange={handleChange} value={count} />
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

const ItemDetail = ({
  id,name,img,price,stock,description,player,released,background,edition,plataforma,img1,img2,img3,img4,}) => {
  const [inputType] = useState("button");
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

 
  const ItemCount = inputType === "button" ? ButtonCount : InputCount;

  const { addItem, isInCart } = useCart();
  const { setNotification } = useNotification();

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id,
      name,
      price,
      quantity,
      img,
    };

    addItem(productToAdd);
    setNotification("error", `Se agregaron ${quantity} ${name}`);
  };

  return (
    <div
      style={{
        padding: "30px 0",
        background: `linear-gradient(rgba(0, 0, 0, 0.829), rgba(0, 0, 0, 0.7)), url(${background})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}>
        
      <article>
        {/* <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button> */}

        <div className="row">
          <div className="imagen-game-col">
            <div className="nuevo">
              <img src={img} alt={name} />
            </div>
          </div>

          <div className="desc-game-col">
            <h2 className="title-games">{name}</h2>

            <div className="details-info">
              <span> Precio: ${price}</span>
              <span> Stock: {stock}</span>
              <span> Jugadores: {player}</span>
              <span> Publicado: {released}</span>
              <span> Plataforma: {plataforma}</span>
              <span> Edición: {edition}</span>
            </div>

            <p className="desc">Descripción: {description}</p>

            <div className="rating-ct-col">
              <p>Capturas de Pantalla del juego</p>
            </div>
            <div className="rating-and-counter-container">
              <div className="rating-ct">
                <div className="rating-ct-s1">
                  <div className="rating-ct-s2">
                    <button
                      type="button"
                      className="rating-ct-s3"
                      onClick={() => setImagenSeleccionada(img1)}>
                      <img src={img1} alt={name} />
                    </button>
                  </div>
                </div>
                <div className="rating-ct-s1">
                  <div className="rating-ct-s2">
                    <button
                      type="button"
                      className="rating-ct-s3"
                      onClick={() => setImagenSeleccionada(img2)}>
                      <img src={img2} alt={name} />
                    </button>
                  </div>
                </div>
                <div className="rating-ct-s1">
                  <div className="rating-ct-s2">
                    <button
                      type="button"
                      className="rating-ct-s3"
                      onClick={() => setImagenSeleccionada(img3)}>
                      <img src={img3} alt={name} />
                    </button>
                  </div>
                </div>
                <div className="rating-ct-s1">
                  <div className="rating-ct-s2">
                    <button
                      type="button"
                      className="rating-ct-s3"
                      onClick={() => setImagenSeleccionada(img4)}>
                      <img src={img4} alt={name} />
                    </button>
                  </div>
                </div>
              </div>

             
              {isInCart(id) ? (
                <ButtonBuy/>

              ) : (
                <ItemCount stock={stock} onAdd={handleOnAdd} />
              )}
              
              {imagenSeleccionada && (
                <div className="modal-imagen">
                  <img
                    src={imagenSeleccionada}
                    alt="Imagen Seleccionada"
                    className="imagen-ampliada"
                  />
                  <button onClick={() => setImagenSeleccionada(null)}>
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <footer>

        </footer>

      </article>
    
    </div>

    
  );
};

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="cart-content">
      <div className="cart-content-s1">
        <p>Metodos de Pago</p>
      </div>
      <div className="cart-metodos-pago">
        <div className="cart-pagos">
          <img
            src="https://assets.eneba.com/payments/v1/color/braintree_paypal.svg"
            alt=""
          />
        </div>
        <div className="cart-pagos">
          <img
            src="https://assets.eneba.com/payments/v1/color/checkout.svg"
            alt=""
          />
        </div>
        <div className="cart-pagos">
          <img
            src="https://assets.eneba.com/payments/v1/color/dlocal_pago_efectivo.svg"
            alt=""
          />
        </div>
        <div className="cart-pagos">
          <img
            src="https://assets.eneba.com/payments/v1/color/boa_pe_transfer.svg"
            alt=""
          />
        </div>
      </div>
      <div className="cart-content-s2">
        <div className="counter">
          <button
            className="custom-button"
            onClick={decrement}
            disabled={count === 1}
          >
            -
          </button>
          <p>{count}</p>
          <button className="custom-button" onClick={increment}>
            +
          </button>
        </div>
      </div>
      <div className="btn-buy">
        <button className="button" onClick={() => onAdd(count)} tabIndex="0">
          Agregar al carrito
        </button>
      </div>
      
    </div>

  );
};


  
 
export default ItemDetail;
