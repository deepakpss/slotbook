import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
 
  apiKey: "AIzaSyDhurB15wGnYnmiwnuh3IMLXwM2BjVHIjM",
  authDomain: "slot-booking-for-nitk.firebaseapp.com",
  projectId: "slot-booking-for-nitk",
  storageBucket: "slot-booking-for-nitk.appspot.com",
  messagingSenderId: "685033575154",
  appId: "1:685033575154:web:38ab716998a0571d27766b",
  measurementId: "G-G8HPGEQZS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;
//     console.log("User Info: ", user);
//   } catch (error) {
//     console.error("Error during sign-in:", error);
//   }
// };

export { auth, provider, signInWithPopup };
