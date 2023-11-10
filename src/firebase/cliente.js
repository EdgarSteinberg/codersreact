
import { initializeApp } from "firebase/app"

import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCXjDG0c3Z8MN4zygzJBSfIwqCRP0J7GOg",
  authDomain: "reactcoder-91c13.firebaseapp.com",
  projectId: "reactcoder-91c13",
  storageBucket: "reactcoder-91c13.appspot.com",
  messagingSenderId: "213226108663",
  appId: "1:213226108663:web:11b9c4e83dff1c187445f2"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);