import { Link, useParams } from 'react-router-dom'
import { Context } from '../../context/Context';
import { useContext, useState } from 'react';
import { Container } from './styles';
import {Navigate } from 'react-router-dom'


export default function PollVote(index){
    const [checked, setChecked] = useState(false)
    const [polls, setPolls] = useContext(Context)
    const { id } = useParams();
    const objClone = polls

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
        setPolls(prev => prev.questions[index].votes++)


    }

    return(
        <Container>
        
                    
            <div className='wrap-poll'>
                <h1 className='question-title'>{polls.title}</h1>
                <div className='wrap-questions'>
                
                    {polls.questions.map((i, index)=> {
                        return(
                            <label className='question-container'>
                                <input id={index} className='questions-check' type={'checkbox'} name='questions-check' onClick={handleCheck}/> 
                                <span className='question-text'>{i[0].question}</span>
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