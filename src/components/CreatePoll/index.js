import { useState } from 'react'
import { Container } from './styles'


export default function CreatePoll({obj}){
    const [polls, setPolls]  = useState([
        {
            'id': 0,
            'title': 'Poll Teste',
            'questions': 
            [
                {'question ' : 'Teste 01'},
                {'question ' : 'Teste 02'},
                {'question ' : 'Teste 03'},
                {'question ' : 'Teste 04'}
            ]
    
            
        }
    ]);

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
            console.log(obj)
    
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

