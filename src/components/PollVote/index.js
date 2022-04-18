import { Link, useParams } from 'react-router-dom'
import { Context } from '../../context/Context';
import { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import {Navigate } from 'react-router-dom'


export default function PollVote(index){
    const [poll, setPoll] = useState([])
    const {getPoll , fetchedPoll, setFetchedPoll, addVote} = useContext(Context)
    const { id } = useParams();



    useEffect(()=>{
        if(fetchedPoll.length === 0){
            getPoll(id)
            

        }
  
    }, [fetchedPoll])

    const handleCheck = (e) =>{
        document.querySelectorAll('.questions-check').forEach((i)=>{
            i.checked = false
            i.parentNode.style.border = 'none'
        })
        index = e.target.id
        e.target.checked = true
        e.target.parentNode.style.border  = '2px solid #5ec96e'
        console.log(index)
        

    }

    const handleClick = (e) =>{
        addVote(index)
    }

    return(
        <Container>
        
                    
            <div className='wrap-poll'>
                <h1 className='question-title'>{fetchedPoll.title}</h1>
                <div className='wrap-questions'>
                
                    { fetchedPoll.length === 0 ? null :  fetchedPoll.questions.map((i, index)=> {
                        return(
                            <label className='question-container'>
                                <input id={index} className='questions-check' type={'checkbox'} name='questions-check' onClick={handleCheck}/> 
                                <span className='question-text'>{i.question}</span>
                            </label>  
                            
                        )
                    })}

                </div>
                <div className='bottom-poll' >
                    <button className='send-btn' onClick={handleClick}>Enviar voto</button>
                    <span>Ver resultados</span>
                </div>

            </div>
        
    
    
        </Container>
    )
}