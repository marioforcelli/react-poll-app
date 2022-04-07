import { useState } from 'react'
import { Container } from './styles'
import { useContext } from 'react'
import { Context } from '../../context/Context'


export default function CreatePoll({obj}){

    const [polls, setPolls] = useContext(Context)
    const handleSubmit = (e) =>{
        if(document.querySelector('.poll-title-input').value){
            setPolls((prev) =>{ 
                return [...prev,
                {
                    'id': polls.length + 1,
                    'title' : document.querySelector('.poll-title-input').value,
                    'questions': Array.from(document.querySelector('.questions').children).
                            filter((i, index) => index > 0 && i.value).map((i, index) => {
                                return {'question': i.value,'votes' : 0}
                            })
                }
            ]

            })
            console.log(polls)
    
        }
    }

    return(
        <Container>
            <h1>Criação da Enquete</h1>
            <div className='title'>
                <a className='poll-title-text'>Título da enquete:</a>
                <input className='poll-title-input'></input>
            </div>
            <div className='questions'
            onKeyDown={(e)=> {
                if (!e.target.nextSibling){
                    e.target.insertAdjacentHTML('afterend', '<input></input>')
                }
            }}
            >
                <a>Questões:</a>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </div>
            <button onClick={handleSubmit} className='save-btn'>Criar Enquete</button>
        </Container>
    )

}

