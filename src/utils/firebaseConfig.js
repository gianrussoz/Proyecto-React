import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASvqifZkmljhfPfdAJ1vKbfqxmAy7A_xc",
    authDomain: "proyecto-react-ch.firebaseapp.com",
    projectId: "proyecto-react-ch",
    storageBucket: "proyecto-react-ch.appspot.com",
    messagingSenderId: "28553530485",
    appId: "1:28553530485:web:1ac198ddd0fdfad4fbbc3c",
    measurementId: "G-1ESZ0KPTYM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;