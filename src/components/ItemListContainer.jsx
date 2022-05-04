import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import db from '../utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idTipo } = useParams();


    useEffect(() => {
        const firestoreFetch = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const firestoreData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return firestoreData;
        }
        firestoreFetch()
            .then(result => setDatos(result))
            .catch(error => console.log(error));
    }, [idTipo]);

    return (
        <>
            <ItemList products={datos} />
        </>
    );
}
export default ItemListContainer;