// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBO1iczfMyj-y6uiMqbggtdw_3CBg0aQUo",
    authDomain: "work-38d4c.firebaseapp.com",
    projectId: "work-38d4c",
    storageBucket: "work-38d4c.appspot.com",
    messagingSenderId: "644877890641",
    appId: "1:644877890641:web:ad23020eec18d28d403470"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}