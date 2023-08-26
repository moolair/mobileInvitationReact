// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext } from "react";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import { getDatabase, set, ref } from "firebase/database";
import firebaseConfig from "./firebase_config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//Reference for Firebase security rules: https://firebase.google.com/docs/rules
function StartFirebase() {
    // Aug 26, 2023
    // YJ
    // Hiding firebase config info
    // const firebaseConfig = {
    //     apiKey: "",
    //     authDomain: "",
    //     databaseURL: "",
    //     projectId: "",
    //     storageBucket: "",
    //     messagingSenderId: "",
    //     appId: "",
    //     measurementId: ""
    // };
    //END Aug 26, 2023

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
