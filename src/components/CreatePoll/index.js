import { useState } from 'react'
import { Container } from './styles'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'
import Api from '../../services/Api'





export default function CreatePoll(){
    const [polls, setPolls] = useContext(Context)
    const [title, setTitle] = useState('')
    const handleSubmit = (e) =>{
        
        Api.addPoll(polls)
        console.log(polls)
    }
    const formChange = (e) =>{
       const {name, value, id} = e.target
       if(name === 'title'){
           setTitle(value)
       }else{
        let formInput = [...polls.questions]
        formInput[id].question = value
        setPolls({...polls, 'questions': formInput})
       }

    }

    const handleKeyDown = (e) =>{
            if (!e.target.nextSibling){

                setPolls(prev => {
                    return {
                        ...prev,
                        'questions' : [...prev.questions, {'question': '', 'votes': 0}]
                    }
                })
                console.log(polls)


            }
    }

    return(
        <Container>
            <h1>Criação da Enquete</h1>
            <div className='title'>
                <a className='poll-title-text'>Título da enquete:</a>
                <input name='title' value={title} onChange={formChange} className='poll-title-input'></input>
            </div>
                <a>Questões:</a>
                <form className='form-questions'>   
                    {polls.questions.length && polls.questions.map((i, index) =>{
                        return(
                            <input name='question'  onChange={formChange} onKeyDown={handleKeyDown} id={index} ></input>
                        )
                    })}
                </form>
            <button onClick={handleSubmit} className='save-btn'>Criar Enquete</button>
            {}
        </Container>
    )

}

