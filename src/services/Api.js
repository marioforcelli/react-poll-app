import firebaseConfig from "../firebaseConfig";

import { firebase, initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, addDoc, setDoc } from 'firebase/firestore';

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore();

async function getPolls(){
    const pollCollection = collection(db, 'polls')
    const polls = await getDocs(pollCollection)
    const pollsData = polls.docs.map(doc => doc.data())
    return pollsData

    
}

async function addPoll(obj){
    const newPoll = doc(collection(db, 'polls'))
    await setDoc(newPoll, obj)
    

}

export default {getPolls, addPoll}