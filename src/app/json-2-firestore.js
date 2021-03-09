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

var collection = "tutorials";

var json = [
  {
    id: 1,
    title: "Focaccia al rosmarino",
    description: "Wood fired rosemary and garlic focaccia",
    published: 8.5,
  },
  {
    id: 2,
    title: "Burratta con speck",
    description:
      "Burratta cheese, imported smoked prok belly prosciutto, pached balsamic pear",
    published: 13.5,
  },
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
