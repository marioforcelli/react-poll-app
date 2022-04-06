import logo from './logo.svg';
import './App.css';
import { GlobalStyles} from './styles/styles'
import Header from './components/Header/'
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom'


function App() {


  
  return (
    <>
        <GlobalStyles />
        <Header/>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>

    </>
  )

}

export default App;
