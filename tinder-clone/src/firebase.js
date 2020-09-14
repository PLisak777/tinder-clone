import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDWyKeFJ_sCaHhCOrF1t-2VgEORzYDamuw',
	authDomain: 'tinder-clone-83140.firebaseapp.com',
	databaseURL: 'https://tinder-clone-83140.firebaseio.com',
	projectId: 'tinder-clone-83140',
	storageBucket: 'tinder-clone-83140.appspot.com',
	messagingSenderId: '755378606250',
	appId: '1:755378606250:web:d16e17c251cb7b18d640d3',
	measurementId: 'G-Q994PRMHT1',
};

// https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg

// https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1177532680%2F0x0.jpg

// https://s31242.pcdn.co/wp-content/uploads/2020/07/ellen-degeneres-show.jpeg

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
