import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY ,
    authDomain:process.env.REACT_APP_AUTHDOMAIN ,
    projectId:process.env.REACT_APP_PROJECT_ID ,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID ,
    appId:process.env.REACT_APP_APP_ID ,
    /* apiKey: "AIzaSyD0L-B_ghNHmZRFB7ypapSLSxdNOXaJBrQ",
    authDomain: "doctors-portal-8c781.firebaseapp.com",
    projectId: "doctors-portal-8c781",
    storageBucket: "doctors-portal-8c781.appspot.com",
    messagingSenderId: "270469070930",
    appId: "1:270469070930:web:acbc012237c08a6f905f8b", */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 