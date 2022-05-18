import { query, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

export const firestoreFetch = async (idTipo) => {
    let q;
    if (idTipo) {
        q = query(collection(db, "products"), where('idTipo', '==', idTipo));
    } else {
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: id,
            ...docSnap.data()
        }
    } else {
        console.log("No such document!");
    }
}