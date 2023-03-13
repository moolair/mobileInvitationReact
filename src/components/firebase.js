import { createContext, useContext } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref } from "firebase/database";
// import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA638grCAbXxrc0Un4mtqhWNuIz3-4FxBs",
    authDomain: "moolair-website.firebaseapp.com",
    databaseURL: "https://moolair-website-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "moolair-website",
    storageBucket: "moolair-website.appspot.com",
    messagingSenderId: "136792388110",
    appId: "1:136792388110:web:c3cb74dcb387c9bbc9c25f",
    measurementId: "G-8W81BM8QN9",
    databaseURL: "https://moolair-website-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const firebaseAuth = getAuth(app);
export const database = getDatabase(app);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const putData = (key, data) => set(ref(database, key), data);
    return (
        <FirebaseContext.Provider value={{ putData }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
