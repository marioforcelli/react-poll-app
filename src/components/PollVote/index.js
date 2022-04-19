import { Link, useParams } from 'react-router-dom'
import { Context } from '../../context/Context';
import { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import {Navigate } from 'react-router-dom'
import Api from '../../services/Api';


export default function PollVote(index){
    const [poll, setPoll] = useState([])
    const {pollTitle, questions, getPoll, addVote} = useContext(Context)
    const { id } = useParams();

    useEffect(()=>{
        getPoll(id)
    },[])


    const handleCheck = (e) =>{
        document.querySelectorAll('.questions-check').forEach((i)=>{
            i.checked = false
            i.parentNode.style.border = 'none'
        })
        index = e.target.id
        e.target.checked = true
        e.target.parentNode.style.border  = '2px solid #5ec96e'
        

    }

    const handleClick = (e) =>{
        let voteInput = [...questions]
        voteInput[index].votes = voteInput[index].votes + 1

        addVote(voteInput)
    }

    return(
        <Container>
        
                    
            <div className='wrap-poll'>
                <h1 className='question-title'>{pollTitle}</h1>
                <div className='wrap-questions'>
                
                    { questions.length === 0 ? null :  questions.map((i, index)=> {
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
                    <Link to={`/results/${id}`} ><a>Ver resultados</a></Link>
                </div>

            </div>
        
    
    
        </Container>
    )
}