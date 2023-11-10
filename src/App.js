import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={"Bienvenidos"} />
            <ItemCount initial={1} stock={10} onAdd={() => toast("Producto agregado correctamente!")}/>
            <ToastContainer/>
        </div>
    )
}

export default App;