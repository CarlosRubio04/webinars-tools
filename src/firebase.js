import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAD_fp8-whTj5ZwNU7M_bwZH_mLwFdxoc8',
  authDomain: 'webinars-tools.firebaseapp.com',
  databaseURL: 'https://webinars-tools.firebaseio.com',
  projectId: 'webinars-tools',
  storageBucket: '',
  messagingSenderId: '158174431406',
  appId: '1:158174431406:web:63c02247e69f2015'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase
