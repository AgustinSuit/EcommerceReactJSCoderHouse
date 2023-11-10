import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">CompraGamer</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" aria-current="page" href="#">Placas de Video</a>
                        <a class="nav-link" href="#">Memorias RAM</a>
                        <a class="nav-link" href="#">Procesadores</a>
                    </div>
                </div>
            </div>
            <CartWidget/>
        </nav>

    )
}

export default NavBar

