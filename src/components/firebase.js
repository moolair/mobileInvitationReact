// import { createContext, useContext } from "react";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, set, ref } from "firebase/database";
// // import firebase from "./firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyA638grCAbXxrc0Un4mtqhWNuIz3-4FxBs",
//     authDomain: "moolair-website.firebaseapp.com",
//     databaseURL: "https://moolair-website-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "moolair-website",
//     storageBucket: "moolair-website.appspot.com",
//     messagingSenderId: "136792388110",
//     appId: "1:136792388110:web:c3cb74dcb387c9bbc9c25f",
//     measurementId: "G-8W81BM8QN9",
//     databaseURL: "https://moolair-website-default-rtdb.asia-southeast1.firebasedatabase.app/",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // const firebaseAuth = getAuth(app);
// export const database = getDatabase(app);

// const FirebaseContext = createContext(null);

// export const useFirebase = () => useContext(FirebaseContext);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext } from "react";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import { getDatabase, set, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function StartFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyA638grCAbXxrc0Un4mtqhWNuIz3-4FxBs",
        authDomain: "moolair-website.firebaseapp.com",
        databaseURL: "https://moolair-website-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "moolair-website",
        storageBucket: "moolair-website.appspot.com",
        messagingSenderId: "136792388110",
        appId: "1:136792388110:web:c3cb74dcb387c9bbc9c25f",
        measurementId: "G-8W81BM8QN9"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //   const analytics = getAnalytics(app);
    return getDatabase(app);
}

export default StartFirebase;

// export const database = StartFirebase();

// const FirebaseContext = createContext(null);

// export const FirebaseProvider = (props) => {

//     const putData = (key, data) => set(ref(database, key), data);
//     return (
//         <FirebaseContext.Provider value={{ putData }}>
//             {props.children}
//         </FirebaseContext.Provider>
//     )
// }
