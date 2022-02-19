import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDDxrfbnXFnFXBWcQp0RA3_JExp0IvQn-c",
	authDomain: "learn-english-3a509.firebaseapp.com",
	projectId: "learn-english-3a509",
	storageBucket: "learn-english-3a509.appspot.com",
	messagingSenderId: "522363151522",
	appId: "1:522363151522:web:d9dc8289f82f4bf20be3fb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const timestamp = serverTimestamp()
