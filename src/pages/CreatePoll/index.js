import { useState } from 'react'
import { Container } from './styles'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'




export default function CreatePoll(){
    const [formData, setFormData] = useState([
        {'question' : '', 'votes': 0},
        {'question' : '', 'votes': 0},
        {'question' : '', 'votes': 0},
        {'question' : '', 'votes': 0}
        
    ]);
    const {questions, setQustions, setPollTitle, pollTitle, createPoll, pollId} = useContext(Context)
    const handleSubmit = () =>{
        createPoll();
        
    }
    const formChange = (e) =>{
       const {name, value, id} = e.target
       if(name === 'title'){
           setPollTitle(value)
       }else{
        let formInput = [...formData]
        formInput[id].question = value
        setQustions(formInput)
        
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
            <h1>Criação da Enquete</h1>
            <div className='title'>
                <a className='poll-title-text'>Título da enquete:</a>
                <input name='title' value={pollTitle} onChange={formChange} className='poll-title-input'></input>
            </div>
                <a>Questões:</a>
                <form className='form-questions'>   
                    {formData.map((i, index) =>{
                        return(
                            <input name='question'  onChange={formChange} onKeyDown={handleKeyDown} id={index} ></input>
                        )
                    })}
                </form>
            <Link to={`/${pollId}`}><button onClick={handleSubmit} className='save-btn'>Criar Enquete</button></Link>
        </Container>
    )

}

