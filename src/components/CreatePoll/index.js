import { useState } from 'react'
import { Container } from './styles'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'
import Api from '../../services/Api'





export default function CreatePoll(){
    const [formData, setFormData] = useState([
        {'question' : '', 'votes': 0},
        {'question' : '', 'votes': 0},
        {'question' : '', 'votes': 0},
        {'question' : '', 'votes': 0}
        
    ]);
    const {setNewPoll, newPoll, createPoll, getPoll} = useContext(Context)
    const [title, setTitle] = useState('')
    const handleSubmit = () =>{
        createPoll()
    }
    const formChange = (e) =>{
       const {name, value, id} = e.target
       if(name === 'title'){
           setNewPoll(prev =>{
               return{
                   ...prev, 'title': value
               }
           })
       }else{
        console.log()
        let auxFormInput = [...formData]
        auxFormInput[id].question = value
        setFormData(auxFormInput)
        setNewPoll(prev => {
            return { 
                ...prev,
                'questions': formData
            }
        })
       }

    }

    const handleKeyDown = (e) =>{
            if (!e.target.nextSibling){
                setFormData(prev =>{
                    return [
                        ...prev,
                        {'question': '', 'votes': 0}
                    ]
                })


            }
    }

    return(
        <Container>
            {console.log(formData, newPoll)}
            <h1>Criação da Enquete</h1>
            <div className='title'>
                <a className='poll-title-text'>Título da enquete:</a>
                <input name='title' value={newPoll.title} onChange={formChange} className='poll-title-input'></input>
            </div>
                <a>Questões:</a>
                <form className='form-questions'>   
                    {formData.map((i, index) =>{
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

