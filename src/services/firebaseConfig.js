import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAOXuKyjJbsaqRpLALkLup6A0HtBXzouCc",
    authDomain: "proyectoreactjscoder-cfdc2.firebaseapp.com",
    projectId: "proyectoreactjscoder-cfdc2",
    storageBucket: "proyectoreactjscoder-cfdc2.appspot.com",
    messagingSenderId: "937341375987",
    appId: "1:937341375987:web:51d75615fb768c8fd3ee86"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)