 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAGI4GQYKlSSPnYwHmTIGj4ymYAaerVt_0",
  authDomain: "kwitter-fa631.firebaseapp.com",
  databaseURL: "https://kwitter-fa631-default-rtdb.firebaseio.com",
  projectId: "kwitter-fa631",
  storageBucket: "kwitter-fa631.appspot.com",
  messagingSenderId: "465343269943",
  appId: "1:465343269943:web:2b09d51f7cc22814dec3b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + username +" !";

function add_room() {
  roomname = document.getElementById("room_name").value;
  localStorage.setItem("roomname", roomname);
  firebase.database().ref("/").child(roomname).update({
    purpose: "adding roomname"
  });
  window.location = "nwitterpage.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("roomname: " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function redirecttoroomname(name) {
  console.log(name);
  localStorage.setItem("roomname", name);
  window.location = "nwitterpage.html";
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location = "index.html";
}