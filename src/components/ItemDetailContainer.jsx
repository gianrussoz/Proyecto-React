import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import promesaProductos from '../utils/promesa';
import products from '../utils/products';

const ItemDetailContainer = () => {
    const [datos, setDatos] = useState({});
    const { id } = useParams();

    useEffect(() => {
        promesaProductos(1000, products.find(producto => producto.id === parseInt(id)))
            .then(resultado => setDatos(resultado))
            .catch(error => console.log(error));
    }, [id]);

    return (
        <>
            <ItemDetail item={datos} />
        </>
    );
}
export default ItemDetailContainer;