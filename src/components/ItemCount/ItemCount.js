import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-1">
                <button className="btn btn-danger" onClick={decrement}>-</button>
                </div>
                <div className="col-1">
                <h4 className="Number">{quantity}</h4>
                </div>
                <div className="col-1">
                <button className="btn btn-success" onClick={increment}>+</button>
                </div>
            </div>
            <div>
                <button className="btn btn-dark" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>

        </div>

    )
}


export default ItemCount