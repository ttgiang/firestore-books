const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyANj5NL2TKLNgPAbjxjZMfyPdSzYqzHhTU",
  authDomain: "dots-d341f.firebaseapp.com",
  projectId: "dots-d341f",
});

var db = firebase.firestore();

var collection = "scouting";

var json = [
	{"rank:": "tenderfoot", "sequence": "1","letter": "a","requirement": "1a. Present yourself to your leader, prepared for an overnight camping trip. Show the personal and camping gear you will use. Show the right way to pack and carry it. ","steps": "","completed": "","signed": "","required": ""},
];

json.forEach(function (obj) {
  db.collection(collection)
    .add({
      id: obj.id,
      title: obj.title,
      description: obj.description,
      published: obj.published,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
