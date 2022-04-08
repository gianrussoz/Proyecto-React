import ItemCount from './ItemCount';
import ItemList from './ItemList';
import mostrarProductos from '../promesa';
import { useEffect, useState } from 'react';
const { products } = require('../../products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        mostrarProductos(1000, products)
            .then(result => setDatos(result))
            .catch(error => console.log(error));
    }, []);
    const onAdd = (count) => {
        alert("Añadiste " + count + " items al carrito.");
    }
    return (
        <>
            <ItemList items={datos} />
            <ItemCount stock="5" initial="1" onAdd={onAdd}/>
        </>
    )
}
export default ItemListContainer;