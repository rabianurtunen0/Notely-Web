import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXDbgX03TErDFt3RRZwjYWqF7_RpmZkrg",
    authDomain: "notely-27b52.firebaseapp.com",
    databaseURL: "https://notely-27b52-default-rtdb.firebaseio.com",
    projectId: "notely-27b52",
    storageBucket: "notely-27b52.appspot.com",
    messagingSenderId: "1026276895469",
    appId: "1:1026276895469:web:0793f8abc426a19a4bfae4",
    measurementId: "G-99ELBXHZ09"
};

const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)
const auth = getAuth()
const db = getFirestore()
export { firebaseApp, analytics, auth, db }
