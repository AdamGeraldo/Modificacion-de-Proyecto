import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyBP_gte_G5Y-Rz5qeSMO3nhB_N9SPTHDFA",
  authDomain: "admin-ae39d.firebaseapp.com",
  projectId: "admin-ae39d",
  storageBucket: "admin-ae39d.appspot.com",
  messagingSenderId: "701618036916",
  appId: "1:701618036916:web:fcdaaf60e7bac16c64b7e1"
  };
  
const app =firebase.initializeApp(firebaseConfig);

export default app;