// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFn4PzYZst5p_QFSj5ZPpl6Y5hVxEezJM",
  authDomain: "game-fsw19.firebaseapp.com",
  databaseURL: "https://game-fsw19-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "game-fsw19",
  storageBucket: "game-fsw19.appspot.com",
  messagingSenderId: "552029521840",
  appId: "1:552029521840:web:07aa1b8855e89b9389f875",
  measurementId: "G-S15S6NMXH0",

};

// Initialize Firebase
export default initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();

export const signOutUser = async () => {
  await signOut(auth);
  
};

export const onAuthStateChangedListener = (callback) =>{
  onAuthStateChanged(auth, callback);
}