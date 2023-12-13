const firebaseConfig = {
  apiKey: "AIzaSyCbtPgSRWxAa8BYtBhvuRAqKLzSwCWp4x8",
  authDomain: "newdailyboxes.firebaseapp.com",
  databaseURL: "https://newdailyboxes-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "newdailyboxes",
  storageBucket: "newdailyboxes.appspot.com",
  messagingSenderId: "70587904313",
  appId: "1:70587904313:web:5207964751059d6d63f8e8",
  measurementId: "G-L36GY6RD2V"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const username = localStorage.getItem('username'); // Retrieve username from local storage

document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
  e.preventDefault();
  const timestamp = Date.now();
  const chatTxt = document.getElementById("chat-txt");
  const message = chatTxt.value;
  chatTxt.value = "";
  db.ref("messages/" + timestamp).set({
    usr: username,
    msg: message,
  });
}

const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const msg = "<li>" + messages.usr + " : " + messages.msg + "</li>";
  document.getElementById("messages").innerHTML += msg;
});