import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyDaT5hd_4AjaRJdQ-O0amknIV78yX0TriU",
        authDomain: "reactshop-c4d5a.firebaseapp.com",
        projectId: "reactshop-c4d5a",
        storageBucket: "reactshop-c4d5a.appspot.com",
        messagingSenderId: "603263674341",
        appId: "1:603263674341:web:dfffe0f6df2ebbb784f10c",
        measurementId: "G-P9XE79HTN9"
      };
      // Initialize Firebase
      const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app
}

export function getFireStore(){
    return firebase.firestore(app)
}