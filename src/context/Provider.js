import { Children, useState } from "react";
import Api from "../services/Api";
import { Context } from "./Context";
import {v4 as uuidv4} from 'uuid'

export default function ContextProvider({children}){
    const [pollId, setPollId] = useState(uuidv4());
    const [pollTitle, setPollTitle] = useState('')
    const [questions, setQustions] = useState([])



    const createPoll = () => {
     
        
        if(pollTitle && questions.length){
            Api.addPoll(
                {
                    'id': pollId,
                    'title': pollTitle,
                    'questions':  questions.filter(i => i.question)
                }
            )
        }
    }

    const getPoll = (id) =>{
        if(id){
            Api.fetchPoll(id).then(data =>{
                data.docs.map(docs =>{
                    console.log(docs.data())
                    setPollId(docs.data().id)
                    setQustions(docs.data().questions)
                    setPollTitle(docs.data().title)
                })
                
            })
            
        }
        

    }

    const addVote = (voteInput) =>{
        setQustions(voteInput)
        Api.updatePoll(pollId, questions)
    }

    return(
        <Context.Provider value={{questions, setQustions, setPollTitle, pollTitle, createPoll, getPoll, addVote, pollId}}>
            {children}
        </Context.Provider>

    ) 
}