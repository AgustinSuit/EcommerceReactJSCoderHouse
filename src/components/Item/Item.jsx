import { Link } from "react-router-dom"

const Item = ({ id, name, img, price, stock }) => {
    return (
        <div className="card m-2 text-center border-warning" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body d-flex flex-column ">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">Precio: ${price}</p>
                <div className="mt-auto">
                <p className="card-text">Stock Disponible: {stock}</p>
                <Link to={`/item/${id}`} className="btn btn-warning">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item