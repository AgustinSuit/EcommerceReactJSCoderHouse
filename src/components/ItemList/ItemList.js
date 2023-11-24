import Item from "../Item/Item"

const ItemList = ({ products }) => {
    console.log(products);
    return (

        <div className="row justify-content-center">
            {products?.map(prod => <Item key={prod.id} {...prod} />)}
            {/* {products?.map(prod => <Item key={prod.id} product={prod} />)} */}
        </div>
    )
}

export default ItemList