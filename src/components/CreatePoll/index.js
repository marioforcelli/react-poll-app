import { useState } from 'react'
import { Container } from './styles'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'
import Api from '../../services/Api'
import {v4 as uuidv4} from 'uuid'




export default function CreatePoll({obj}){

    const [formData, setFormData] = useState([])
    const uid = uuidv4()
    const [polls, setPolls] = useContext(Context)
    const [title, setTitle] = useState('')
    const handleSubmit = (e) =>{
        console.log(polls)
        if(title && formData.length){
            setPolls(
                {
                    'id': uid,
                    'title' : title,
                    'questions': formData.filter((i, index) => i).map((i, index) => {
                                return [{'question': i,'votes' : 0}]
                            })
                }

            )
            Api.addPoll(polls)
        }
    }

    const formChange = (e) =>{
        if(e.target.name === 'question'){
            setFormData(Array.from(document.querySelectorAll('.questions-input')).map(i=> i.value))
        } else{
            setTitle(e.target.value)
        }
        
    }

    const handleKeyDown = (e) =>{
            if (!e.target.nextSibling){
                e.target.insertAdjacentHTML('afterend', '<input></input>')
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
                    <input className={'questions-input'}  name='question'></input>
                    <input className={'questions-input'} name='question'></input>
                    <input className={'questions-input'} name='question'></input>
                    <input className={'questions-input'} name='question'></input>
                </form>
            <Link to={`/${uid}`}><button onClick={handleSubmit} className='save-btn'>Criar Enquete</button></Link>
            {}
        </Container>
    )

}

