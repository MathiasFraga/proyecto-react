import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtvmImIR-mWMwxRdUg8hvw7iwDVMM74zA",
    authDomain: "camara-studio.firebaseapp.com",
    projectId: "camara-studio",
    storageBucket: "camara-studio.appspot.com",
    messagingSenderId: "139924492295",
    appId: "1:139924492295:web:e821fe7222f44fb9665aa2",
    measurementId: "${config.measurementId}"
  };
  
  const app = initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);

  export const getFirebase = () => app;

  export { getFirestore };
