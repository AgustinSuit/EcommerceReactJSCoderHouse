
const Item = ({ id, name, img, price, stock }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">Stock Disponible: {stock}</p>
                <a href="#" className="btn btn-primary">Ver detalle</a>
            </div>
        </div>
    )
}

export default Item