import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({Stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < Stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>

        
        <div>
        <button className="Button" onClick={() => onAdd(quantity)} disabled={!Stock}>
            Agregar al Carrito
        </button>
        </div>

        </div>
    )

}

export default ItemCount