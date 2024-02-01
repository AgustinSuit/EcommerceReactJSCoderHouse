import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/EcommerceReactJSCoderHouse">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PC_Gamer_logo_%282015-present%29.svg/2560px-PC_Gamer_logo_%282015-present%29.svg.png" alt="Logo de Pagina" height={50}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav Categories">
                        <Link to={`/category/Placas-De-Video`} className="nav-link" aria-current="page">Placas de Video</Link>
                        <Link to={`/category/Memorias-RAM`} className="nav-link">Memorias RAM</Link>
                        <Link to={`/category/Procesadores`} className="nav-link">Procesadores</Link>
                        <Link to={`/category/Fuentes`} className="nav-link">Fuentes</Link>
                        <Link to={`/category/Motherboards`} className="nav-link">Motherboards</Link>
                        <Link to={`/category/Almacenamiento`} className="nav-link">Almacenamiento</Link>
                        <Link to={`/category/Gabinetes`} className="nav-link">Gabinetes</Link>
                    </div>
                </div>
            </div>
            <CartWidget />
        </nav>

    )
}

export default NavBar

