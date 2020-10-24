
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBxT77xG6c6v50LmagcJsWPrv2sAXaBqTg",
      authDomain: "kwitter-13b69.firebaseapp.com",
      databaseURL: "https://kwitter-13b69.firebaseio.com",
      projectId: "kwitter-13b69",
      storageBucket: "kwitter-13b69.appspot.com",
      messagingSenderId: "1018166897304",
      appId: "1:1018166897304:web:89350730b53c17b5283eed",
      measurementId: "G-VZ1N065R4L"
};
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
