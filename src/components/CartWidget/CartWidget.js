import cart from "./Img/cart.svg"


const CartWidget = () => {
    return (
        <div className="CarritoContador">
            <img src={cart} alt="Imagen Carrito" className="Carrito" />
            0
        </div>
    )
}

export default CartWidget