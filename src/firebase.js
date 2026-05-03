import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// TODO: Replace these with your actual Firebase Project configuration keys
// 1. Go to console.firebase.google.com
// 2. Create a new project
// 3. Add a Web App to get these config variables
// 4. Go to Firestore Database and click "Create database" (Start in Test Mode for now)
const firebaseConfig = {
  apiKey: "AIzaSyBBICM9BsIjQE7zZBEUS2zPSXNf8ub6qm0",
  authDomain: "the-karting-club.firebaseapp.com",
  projectId: "the-karting-club",
  storageBucket: "the-karting-club.firebasestorage.app",
  messagingSenderId: "109275202392",
  appId: "1:109275202392:web:4267e00c6035ae938ddb2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Saves an email to the 'waitlist' collection in Firestore
 */
export const saveEmailToWaitlist = async (email) => {
  try {
    const docRef = await addDoc(collection(db, "waitlist"), {
      email: email,
      createdAt: serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};
