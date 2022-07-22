// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDzLHqhdQlDC5z8HbXQPy0BUGK54LvdRoA',
  authDomain: 'canyou-web.firebaseapp.com',
  projectId: 'canyou-web',
  storageBucket: 'canyou-web.appspot.com',
  messagingSenderId: '466152986662',
  appId: '1:466152986662:web:6b85ff248d863c3c64aee7',
  measurementId: 'G-SDYPK2EC5M',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAnalytics()
const db = getFirestore(app)

export { db }
