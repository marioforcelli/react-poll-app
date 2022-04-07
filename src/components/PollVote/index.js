import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../context/Context';
import { useContext } from 'react';
import { Container } from './styles';
import {Navigate } from 'react-router-dom'


export default function PollVote(){
    
    const [polls, setPolls] = useContext(Context)
    const { id } = useParams();
    const pollCheck = polls.filter((i) => i.id == id)

    const handleCheck = (e) =>{
        document.querySelectorAll('.questions-check').forEach((i)=>{
            i.checked = false
        })
        e.target.checked = true

    }

    return(
        <Container>
            {polls.filter((i) => i.id == id).map((i, index)=>{

                return(
                    
                    <div>
                        {}
                        <h1>{i.title}</h1>
                        <div className='wrap-questions'>
                            {i.questions.map((i, index) =>{
                                return(
                                    <div>
                                        <input className='questions-check' type={'checkbox'} name='questions-check' onClick={handleCheck}/> 
                                        <span className='question-text'>{i.question}</span>
                                    </div>  

                                )

                            })}
                        </div>
                    </div>
                )
            })}
           
        </Container>
    )
}