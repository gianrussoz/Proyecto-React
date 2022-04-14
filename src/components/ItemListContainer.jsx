import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getData } from '../utils/products';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
    useEffect(() => {
        async function pedirDatos() {
            let datosRecibidos = await getData();
            setDatos(datosRecibidos);
        }
        pedirDatos()
    }, []);
console.log(datos);
    const onAdd = (count) => {
        alert("Añadiste " + count + " items al carrito.");
    }
    return (
        <>
            <ItemList products={datos}/>
            <ItemCount stock="5" initial="1" onAdd={onAdd}/>
        </>
    )
}
export default ItemListContainer;