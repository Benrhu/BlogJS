const firebaseConfig = {
  apiKey: "AIzaSyB76ZuXcRRTsjmIQnyxkZRfeJj33B0w_7U",
  authDomain: "blogjs-777.firebaseapp.com",
  projectId: "blogjs-777",
  storageBucket: "blogjs-777.appspot.com",
  messagingSenderId: "706674257785",
  appId: "1:706674257785:web:2ddd6397f5509c51ae09a8",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
