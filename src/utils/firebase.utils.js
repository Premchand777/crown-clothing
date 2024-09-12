import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  // signInWithRedirect,
  GoogleAuthProvider,
  // getRedirectResult
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// create an firebase app instance for your application
// this instance should be same as the project we configured or registered our app to in firebase console.

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQs3j4hRhZvrT0cJ-f2r66nHFHLvfCiCs",
  authDomain: "crown-clothing-db-9f5ed.firebaseapp.com",
  projectId: "crown-clothing-db-9f5ed",
  storageBucket: "crown-clothing-db-9f5ed.appspot.com",
  messagingSenderId: "748224093430",
  appId: "1:748224093430:web:a33ce3f19f88fb03fb60d7"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Setup Authentication with firebcase
// Authentication instance will be only one. so it is getAuth() function to initialize.
// We can have multiple providers so it is a class for example to initialize new GoogleAuthProvider().
const googleProvider = new GoogleAuthProvider();
// googleProvider.addScope('profile');
// googleProvider.addScope('email');
// googleProvider.setCustomParameters({
//   prompt: 'select_account'
// });


export const firebaseAuth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(firebaseAuth, googleProvider);
// now enable google authentication in firebase console with secure required domains.

// google removed cross origin redirect signin
// export const signInWithGoogleRedirect = () => signInWithRedirect(firebaseAuth, googleProvider);
// export const fetchRedirectResult = () => getRedirectResult(firebaseAuth);

export const firestoreDB = getFirestore(firebaseApp);

export const createUserDoc = async (userAuth) => {
  const userDocRef = doc(firestoreDB, 'users', userAuth.uid);
  const userDocSnapshot = await getDoc(userDocRef);
  // console.log(userDocSnapshot.exists());
  if (!userDocSnapshot.exists()) {
    const setUserDoc = await setDoc(userDocRef, { id: userAuth.uid, name: userAuth.displayName, email: userAuth.email, createdAt: new Date() });
    console.log(setUserDoc);
  }
}

export const createAuthUserWithEmailPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
}

export const signInWithEmailPassword = async (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password);