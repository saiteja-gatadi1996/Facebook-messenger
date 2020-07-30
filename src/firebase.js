import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
        apiKey: "AIzaSyBECcfL6SwMw6n9aT12Pt8p-kJqval2KXA",
        authDomain: "facebook-messenger-clone-3cbd2.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-3cbd2.firebaseio.com",
        projectId: "facebook-messenger-clone-3cbd2",
        storageBucket: "facebook-messenger-clone-3cbd2.appspot.com",
        messagingSenderId: "3599961516",
        appId: "1:3599961516:web:b9b5eb17211589eb60fe09",
        measurementId: "G-V6PVGV65GE"
      
});

const db= firebaseApp.firestore();

export default db