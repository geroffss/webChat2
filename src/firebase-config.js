// Include Firebase SDK (replace "9.6.8" with the version you're using)
// Note: Ensure that the version you're using is compatible with the Firebase features you need
<>// Include Firebase SDK (replace "9.6.8" with the version you're using)
    // Note: Ensure that the version you're using is compatible with the Firebase features you need
    <script src="https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js"></script><script src="https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"></script></>

// Your Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbtPgSRWxAa8BYtBhvuRAqKLzSwCWp4x8",
    authDomain: "newdailyboxes.firebaseapp.com",
    databaseURL: "https://newdailyboxes-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "newdailyboxes",
    storageBucket: "newdailyboxes.appspot.com",
    messagingSenderId: "70587904313",
    appId: "1:70587904313:web:5207964751059d6d63f8e8",
    measurementId: "G-L36GY6RD2V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();
