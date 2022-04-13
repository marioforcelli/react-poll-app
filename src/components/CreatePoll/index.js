import { useState } from 'react'
import { Container } from './styles'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'
import Api from '../../services/Api'
import {v4 as uuidv4} from 'uuid'




export default function CreatePoll(){

    const [formData, setFormData] = useState([])
    // const obj = {'id': 2, 'title': 'teste 2', 'questions': [{'question': 'Teste 2022'}, {'question': 'Teste 20223232'}]}
    const uid = uuidv4()
    const [polls, setPolls] = useContext(Context)
    const [title, setTitle] = useState('')
    const handleSubmit = (e) =>{
        Api.addPoll(polls)
        
       
        console.log(polls)
    }

    const formChange = (e) =>{
        let formData = []
        if(e.target.name === 'question'){
            console.log(document.querySelectorAll('.questions-input').length)
            formData = Array.from(document.querySelectorAll('.questions-input')).map(i=> i.value)
          
        } else{
            setTitle(e.target.value)
        }
        if(title && formData.length){
            setPolls(
                {
                    'id': uid,
                    'title' : title,
                    'questions': formData.filter((i, index) => i).map((i, index) => {
                                return {'question': i,'votes' : 0}
                            })
                }

            )
            
            
        }
        console.log(polls)

        
    }

    const handleKeyDown = (e) =>{
        let inputLength = document.querySelectorAll('.questions-input').length
            if (!e.target.nextSibling){
                e.target.insertAdjacentHTML('afterend', `<input class="questions-input" id = ${inputLength + 1} name='question'></input>`)

            }
    }

    return(
        <Container>
            <h1>Criação da Enquete</h1>
            <div className='title'>
                <a className='poll-title-text'>Título da enquete:</a>
                <input value={title} onChange={formChange} className='poll-title-input'></input>
            </div>
                <a>Questões:</a>
                <form onKeyDown={handleKeyDown} onChange={formChange} className='form-questions'>
                    <input id='1' className={'questions-input'}  name='question'></input>
                    <input id='2' className={'questions-input'} name='question'></input>
                    <input id='3' className={'questions-input'} name='question'></input>
                    <input id='4' className={'questions-input'} name='question'></input>
                </form>
            <button onClick={handleSubmit} className='save-btn'>Criar Enquete</button>
            {}
        </Container>
    )

}

