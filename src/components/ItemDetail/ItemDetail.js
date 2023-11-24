import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (

        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">Categoría: {category}</p>
                <p className="card-text">Descripción: {description}</p>
                <p className="card-text">Precio: ${price}</p>
                <footer className="ItemFooter">
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => toast.success(`Producto agregado correctamente! Cantidad: ${quantity}`,{
                        autoClose: 3000,
                    })} />
                    <ToastContainer/>
                </footer>
            </div>
        </div>

    )
}

export default ItemDetail