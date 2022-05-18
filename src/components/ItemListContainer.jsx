import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idTipo } = useParams();

    useEffect(() => {
        firestoreFetch(idTipo)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idTipo]);

    return (
        <>
            <ItemList products={datos} />
        </>
    );
}
export default ItemListContainer;