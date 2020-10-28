import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDxb5PQYsW12InCRDFzX7GX-O9NZMua9v0",
	authDomain: "simple-login-react.firebaseapp.com",
	databaseURL: "https://simple-login-react.firebaseio.com",
	projectId: "simple-login-react",
	storageBucket: "simple-login-react.appspot.com",
	messagingSenderId: "345858754648",
	appId: "1:345858754648:web:066afb07cafa00abbce22d"
};
// Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
