import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDcqPiTtnUAx5I0zLy721-8VWOhJ_s8t5k",
  authDomain: "ezdocument--doc-summarizer.firebaseapp.com",
  projectId: "ezdocument--doc-summarizer",
  storageBucket: "ezdocument--doc-summarizer.firebasestorage.app",
  messagingSenderId: "860493744728",
  appId: "1:860493744728:web:056cea4f93596065f5582d",
  measurementId: "G-HZW2PKC27C"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
