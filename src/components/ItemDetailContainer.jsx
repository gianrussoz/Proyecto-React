import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetchOne } from '../utils/firestoreFetch';

const ItemDetailContainer = () => {
    const [datos, setDatos] = useState({});
    const { id } = useParams();

    useEffect(() => {
        firestoreFetchOne(id)
            .then(result => setDatos(result))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <ItemDetail item={datos} />
        </>
    );
}
export default ItemDetailContainer;