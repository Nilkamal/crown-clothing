import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
  apiKey: "AIzaSyCeCU4waNMUo0caGy5HYmcxVLqJsh_8xzs",
  authDomain: "crown-db-c763b.firebaseapp.com",
  databaseURL: "https://crown-db-c763b.firebaseio.com",
  projectId: "crown-db-c763b",
  storageBucket: "crown-db-c763b.appspot.com",
  messagingSenderId: "656706097150",
  appId: "1:656706097150:web:2ec84ea68e5af3dde8faaf",
  measurementId: "G-FB3BY7JVWW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email, phoneNumber } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, phoneNumber, createdAt,...additionalData });
    } catch (error) {
      console.log('Error occurred while creating user', error.message);
    }

  }
  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
