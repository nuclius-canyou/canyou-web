import { db } from './firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

export const handleNewEmail = async (email) => {
  const collectionRef = collection(db, 'prelaunch')
  const payload = { email, timestamp: serverTimestamp() }
  await addDoc(collectionRef, payload)
}
