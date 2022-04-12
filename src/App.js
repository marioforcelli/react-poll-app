import logo from './logo.svg';
import './App.css';
import { GlobalStyles} from './styles/styles'
import Header from './components/Header/'
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom'
import {Context} from './context/Context';
import {useEffect, useState} from 'react'



function App() {



//   const [polls, setPolls]  = useState([
//     {
//         'id': 0,
//         'title': 'Poll Teste',
//         'questions': 
//         [
//             [{'question' : 'Teste 01', 'votes': 0}],
//             [{'question' : 'Teste 02', 'votes': 0}],
//             [{'question' : 'Teste 03', 'votes': 0}],
//             [{'question' : 'Teste 04', 'votes': 0}]
//         ]
//     },
    
// ]);

const [polls, setPolls] = useState({})

  
  return (
    <Context.Provider value={[polls, setPolls]}>
        <GlobalStyles />
        <Header/>
        <Routes/>
    </Context.Provider>

  )

}

export default App;
