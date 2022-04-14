import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import ItemDetail from './ItemDetail';
import { getData } from '../utils/products';

const ItemDetailContainer = () => {
    const [datos, setDatos] = useState({});
    const { idItem } = useParams();

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