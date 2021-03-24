
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCBb0Nd-OmG_zdvproD9h3EcNyFUOmzu7c",
      authDomain: "kwitter1-3319a.firebaseapp.com",
      projectId: "kwitter1-3319a",
      storageBucket: "kwitter1-3319a.appspot.com",
      messagingSenderId: "791144662884",
      appId: "1:791144662884:web:4b983964eb1a57ef9adc71"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
