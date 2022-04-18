import { Children, useState } from "react";
import Api from "../services/Api";
import { Context } from "./Context";
import {v4 as uuidv4} from 'uuid'

export default function ContextProvider({children}){
    const [newPoll, setNewPoll] = useState({
        'id': uuidv4(),
        'title': '',
        'questions': []
    },
)
   const [fetchedPoll, setFetchedPoll] = useState([])


    const createPoll = () => {

        if(newPoll){
            Api.addPoll(
                {
                    'id': newPoll.id,
                    'title': newPoll.title,
                    'questions':  newPoll.questions.filter(i => i.question)
                }
            )
        }
    }

    const getPoll = (id) =>{
        if(id){
            let res = {}
            Api.fetchPoll(id).then(data =>{
                data.docs.map(docs => setFetchedPoll(docs.data()))
                
            })
            console.log(fetchedPoll)
        }
        

    }

    const addVote = (index) =>{
        setFetchedPoll(prev => prev.questions[index].votes++)
        console.log(fetchedPoll)
    }

    return(
        <Context.Provider value={{createPoll, newPoll, setNewPoll, getPoll, fetchedPoll, addVote, setFetchedPoll}}>
            {children}
        </Context.Provider>

    ) 
}