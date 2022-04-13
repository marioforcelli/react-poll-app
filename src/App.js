import logo from './logo.svg';
import './App.css';
import { GlobalStyles} from './styles/styles'
import Header from './components/Header/'
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom'
import {Context} from './context/Context';
import {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'



function App() {



  const [polls, setPolls]  = useState(
    {
        'id': uuidv4(),
        'title': '',
        'questions': 
        [
            {'question' : '', 'votes': 0},
            {'question' : '', 'votes': 0},
            {'question' : '', 'votes': 0},
            {'question' : '', 'votes': 0}
        ]
    },
    
);


  
  return (
    <Context.Provider value={[polls, setPolls]}>
        <GlobalStyles />
        <Header/>
        <Routes/>
    </Context.Provider>

  )

}

export default App;
