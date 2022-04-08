
const ItemList = ({ products }) => {
    return (    products.length > 0
            ? products.map(producto => producto id={producto.id} nombre={producto.tipo} precio={producto.precio} foto={producto.img[0]} stock={producto.stock})
        : console.log("No hay productos")
    );
}
