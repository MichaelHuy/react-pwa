import * as firebase from 'firebase/app'
import 'firebase/messaging'

const firebaseConfig = {
  //got from your firebase configs
}

const initializedFirebaseApp = firebase.initializeApp(firebaseConfig)
const messaging = initializedFirebaseApp.messaging()

export { messaging }
