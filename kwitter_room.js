
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

      function addRoom()
      {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });
            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
      }

      function getData() 
      {
             firebase.database().ref("/").on('value', function(snapshot) 
      {
             document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
             {
                  childKey = childSnapshot.key; 
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
             });
            });
            }
      //End code
      getData();

      function redirectToRoomName(name)
