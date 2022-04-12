import firebaseConfig from "../firebaseConfig";

import { firebase, initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, addDoc } from 'firebase/firestore';

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore();

async function getPolls(){
    const pollCollection = collection(db, 'polls')
    const polls = await getDocs(pollCollection)
    const pollsData = polls.docs.map(doc => doc.data())
    return pollsData

    
}

async function addPoll(obj){
    const doc = await addDoc(collection(db, 'polls'), obj)
    

}

export default {getPolls, addPoll}