
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD6X8eZrmfX1c2bCF_jCuw3zwROy5k91UM",
      authDomain: "chatin-26e9f.firebaseapp.com",
      databaseURL: "https://chatin-26e9f-default-rtdb.firebaseio.com",
      projectId: "chatin-26e9f",
      storageBucket: "chatin-26e9f.appspot.com",
      messagingSenderId: "215825393602",
      appId: "1:215825393602:web:b3b457ed8d89cb2195185b",
      measurementId: "G-LXE4MSLDEB"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name;
    function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name" 
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
    }
     

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addUser() {
      user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
  purpose: "saving enviorment"
    }) ; 
  }

  function redirectToRoomName(name) {
    console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location ="index.html";
}

