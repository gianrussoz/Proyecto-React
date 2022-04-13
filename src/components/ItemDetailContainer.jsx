import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getData } from '../utils/products';

const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        async function pedirDatos() {
            let datosRecibidos = await getData();
            setDatos(datosRecibidos);
        }
        pedirDatos()
    }, []);

    return (
        <>
            <ItemDetail item={datos} />
        </>
    );
}

export default ItemDetailContainer;