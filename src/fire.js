import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBR8lXWfvLdL5c92Wh9zWZKLvQjw6p6eZk",
    authDomain: "info343-group-project.firebaseapp.com",
    databaseURL: "https://info343-group-project.firebaseio.com",
    projectId: "info343-group-project",
    storageBucket: "info343-group-project.appspot.com",
    messagingSenderId: "88808852141"
  };

export const fire = firebase.initializeApp(config);
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export default fire;
