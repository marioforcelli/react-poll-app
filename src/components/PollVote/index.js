import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../context/Context';
import { useContext, useState } from 'react';
import { Container } from './styles';
import {Navigate } from 'react-router-dom'


export default function PollVote(){
    const [checked, setChecked] = useState(false)
    const [polls, setPolls] = useContext(Context)
    const { id } = useParams();
    const pollCheck = polls.filter((i) => i.id == id)

    const handleCheck = (e) =>{
        document.querySelectorAll('.questions-check').forEach((i)=>{
            i.checked = false
            i.parentNode.style.border = 'none'
            console.log(e.target.parentNode.style.border)
        })
        
        e.target.checked = true
        e.target.parentNode.style.border  = '2px solid #5ec96e'

    }

    return(
        <Container checked={checked}>
            {polls.filter((i) => i.id == id).map((i, index)=>{

                return(
                    
                    <div className='wrap-poll'>
                        <h1 className='question-title'>{i.title}</h1>
                        <div className='wrap-questions'>
                            {i.questions.map((i, index) =>{
                                return(
                                    <label className='question-container'>
                                        <input className='questions-check' type={'checkbox'} name='questions-check' onClick={handleCheck}/> 
                                        <span className='question-text'>{i.question}</span>
                                    </label>  

                                )

                            })}
                        </div>
                        <div className='bottom-poll' >
                            <button className='send-btn'>Enviar voto</button>
                            <span>Ver resultados</span>
                        </div>

                    </div>
                )
            })}
           
        </Container>
    )
}