import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB-00Z6-M47FA2gTsT_QS0QyNbWMOhL1cQ",
  authDomain: "bilipivac-f2b81.firebaseapp.com",
  databaseURL: "https://bilipivac-f2b81.firebaseio.com",
  projectId: "bilipivac-f2b81",
  storageBucket: "bilipivac-f2b81.appspot.com",
  messagingSenderId: "452297064967"
};

firebase.initializeApp(config);

export const saveOrder = (order) => {
  firebase.database().ref('orders').set({
    ...order
  });
};

export default firebase;
