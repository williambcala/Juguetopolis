import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyAOulY9NHur8zkeTqcZQy1a9RQPEM9ja1A",

  authDomain: "cinema-uao.firebaseapp.com",

  projectId: "cinema-uao",

  storageBucket: "cinema-uao.appspot.com",

  messagingSenderId: "538678509836",

  appId: "1:538678509836:web:a495151cedd607be658929"


};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth}

