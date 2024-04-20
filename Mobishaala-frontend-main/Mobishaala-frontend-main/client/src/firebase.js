import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mobishaalaapp-ef854.firebaseapp.com",
  projectId: "mobishaalaapp-ef854",
  storageBucket: "mobishaalaapp-ef854.appspot.com",
  messagingSenderId: "756670974475",
  appId: "1:756670974475:web:015a5a61f4b7ab3537d50e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const txtDb = getFirestore(app);

export {txtDb};