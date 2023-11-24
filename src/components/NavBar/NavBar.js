import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">CompraGamer</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav Categories">
                        <Link to={`/category/Placas-De-Video`} className="nav-link" aria-current="page">Placas de Video</Link>
                        <Link to={`/category/Memorias-RAM`} className="nav-link">Memorias RAM</Link>
                        <Link to={`/category/Procesadores`} className="nav-link">Procesadores</Link>
                    </div>
                </div>
            </div>
            <CartWidget/>
        </nav>

    )
}

export default NavBar

