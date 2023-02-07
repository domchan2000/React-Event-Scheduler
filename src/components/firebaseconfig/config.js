import { initializeApp } from "firebase/app";
import { get, getDatabase } from "firebase/database";

function StartFireBase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCwxOUwMDGoPEUr3g9fOE522I06WDci3ZU",
    authDomain: "react-event-scheduler-54b5a.firebaseapp.com",
    databaseURL:
      "https://react-event-scheduler-54b5a-default-rtdb.firebaseio.com",
    projectId: "react-event-scheduler-54b5a",
    storageBucket: "react-event-scheduler-54b5a.appspot.com",
    messagingSenderId: "410557264202",
    appId: "1:410557264202:web:c977a73913052b4a1f51b3",
  };

  const app = initializeApp(firebaseConfig);

  return getDatabase(app);
}

export default StartFireBase;
