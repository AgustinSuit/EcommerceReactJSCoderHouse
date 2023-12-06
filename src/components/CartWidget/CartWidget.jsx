import cart from "./Img/cart.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to="/cart" className="d-flex">
            <img src={cart} alt="Imagen Carrito" className="Carrito" />
            <div>
                {totalQuantity}
            </div>
        </Link>


    )
}

export default CartWidget