import firebaseConfig from "../firebaseConfig";

import { firebase, initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, setDoc, query, where} from 'firebase/firestore';

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

async function fetchPoll(id){
    const pollCollection =  collection(db, 'polls')
    const q =  query(pollCollection, where("id", "==", id))
    const res = await getDocs(q)
    return res
    
    

    

}

export default {getPolls, addPoll, fetchPoll}