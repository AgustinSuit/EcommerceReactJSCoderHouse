import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"


function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={"Bienvenidos"} />
        </div>
    )
}

export default App;