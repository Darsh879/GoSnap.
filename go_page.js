var firebaseConfig = {
    apiKey: "AIzaSyBczn8qs9HmYIG4defFqXdzaLJ_vmOtfV8",
    authDomain: "gosnap-b045d.firebaseapp.com",
    databaseURL: "https://gosnap-b045d-default-rtdb.firebaseio.com",
    projectId: "gosnap-b045d",
    storageBucket: "gosnap-b045d.appspot.com",
    messagingSenderId: "770597647888",
    appId: "1:770597647888:web:0a1b77e15af3165447bc95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        like : 0,
        message : msg,
        name:user_name
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
