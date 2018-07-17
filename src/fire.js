import firebase from 'firebase'; 
const config = {  
    apiKey: "AIzaSyAzz_lTd7kkN8iw9hgyPD5PNqRncR84vAM",
    authDomain: "info343-a0739.firebaseapp.com",
    databaseURL: "https://info343-a0739.firebaseio.com",
    projectId: "info343-a0739",
    storageBucket: "info343-a0739.appspot.com",
    messagingSenderId: "819298865712"
};


export const fire = firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export default fire;