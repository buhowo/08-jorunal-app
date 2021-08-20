import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCaru7H5kT34REM7eXSiX7q-UEAAnriui0',
  authDomain: 'react-app-cursos-9921f.firebaseapp.com',
  projectId: 'react-app-cursos-9921f',
  storageBucket: 'react-app-cursos-9921f.appspot.com',
  messagingSenderId: '541328909338',
  appId: '1:541328909338:web:c3a7766ae1cd4633e69da3'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  db,
  googleAuthProvider,
  firebase
}
