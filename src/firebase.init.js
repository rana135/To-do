// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6_Woo-6PtjX0jX2h4FcQqAcK72qljMOY",
    authDomain: "todo-task-cc639.firebaseapp.com",
    projectId: "todo-task-cc639",
    storageBucket: "todo-task-cc639.appspot.com",
    messagingSenderId: "515883903997",
    appId: "1:515883903997:web:67496727a467075fd48794"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth