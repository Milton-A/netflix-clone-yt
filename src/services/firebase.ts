// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB85iLVqDvOMMOvSV324uEWKx13Nrr1Vgc",
    authDomain: "netflix-clone-yt-d6b19.firebaseapp.com",
    projectId: "netflix-clone-yt-d6b19",
    storageBucket: "netflix-clone-yt-d6b19.firebasestorage.app",
    messagingSenderId: "418927956701",
    appId: "1:418927956701:web:d2f69881872bbd22854134"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }