
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtq7FgHFRPYeesnjvrjXhaCDiVaSnOk6s",
  authDomain: "my-app-40d80.firebaseapp.com",
  projectId: "my-app-40d80",
  storageBucket: "my-app-40d80.appspot.com",
  messagingSenderId: "456846608917",
  appId: "1:456846608917:web:123fef528a67c8279e1c1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app