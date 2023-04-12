import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB3c2gnR6iwxN6fzyM2PScd8Y8__kXk5JA",
  authDomain: "chat-app-35f79.firebaseapp.com",
  projectId: "chat-app-35f79",
  storageBucket: "chat-app-35f79.appspot.com",
  messagingSenderId: "751185218132",
  appId: "1:751185218132:web:da9f7f19983b0a61457bc1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);