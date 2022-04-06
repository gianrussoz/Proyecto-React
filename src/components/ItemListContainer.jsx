import ItemCount from './ItemCount';

const ItemListContainer = () => {
    const onAdd = (count) => {
        alert("Añadiste " + count + " items al carrito.");
    }
    return (
        <>
            <ItemCount stock="5" initial="1" onAdd={onAdd}/>
        </>
    )
}
export default ItemListContainer;