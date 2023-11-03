import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div className="Nav">
                <button>Placas de Video</button>
                <button>Procesadores</button>
                <button>Memorias RAM</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar