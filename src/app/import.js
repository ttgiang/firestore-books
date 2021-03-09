// https://levelup.gitconnected.com/firebase-import-json-to-firestore-ed6a4adc2b57

// Imports
const firestoreService = require("firestore-export-import");
const firebaseConfig = require("./config.js");
const serviceAccount = require("./serviceAccount.json");

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log("Initialzing Firebase");
    await firestoreService.initializeApp(
      serviceAccount,
      firebaseConfig.databaseURL
    );
    console.log("Firebase Initialized");

    await firestoreService.restore("./data/scouts.json");
    console.log("Upload Success");
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
