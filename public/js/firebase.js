import { initializeApp } from '../../node_modules/firebase/app'
import { getFirestore } from '../../node_modules/firebase/firestore'
export { db }

const firebaseConfig = {
  apiKey: "AIzaSyB76ZuXcRRTsjmIQnyxkZRfeJj33B0w_7U",
  authDomain: "blogjs-777.firebaseapp.com",
  projectId: "blogjs-777",
  storageBucket: "blogjs-777.appspot.com",
  messagingSenderId: "706674257785",
  appId: "1:706674257785:web:2ddd6397f5509c51ae09a8",
};

const firebaseApp = initializeApp(firebaseConfig);

let db = getFirestore(firebaseApp);
