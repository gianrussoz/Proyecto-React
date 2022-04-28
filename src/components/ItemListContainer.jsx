import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import promesaProductos from '../utils/promise';
import products from '../utils/products';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idTipo } = useParams();

    useEffect(() => {
        if (idTipo === undefined) {
            promesaProductos(2000, products)
                .then(resultado => setDatos(resultado))
                .catch(error => console.log(error));
        } else {
            promesaProductos(2000, products.filter(producto => producto.idTipo === parseInt(idTipo)))
                .then(resultado => setDatos(resultado))
                .catch(error => console.log(error));
        }
    }, [idTipo]);

    return (
        <>
            <ItemList products={datos} />
        </>
    );
}
export default ItemListContainer;