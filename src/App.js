import './App.css';
import { GlobalStyles} from './styles/styles'
import Header from './pages/Header'
import Routes from './routes';
import ContextProvider from './context/Provider';



function App() {
  return (
    <ContextProvider>
        <GlobalStyles />
        <Header/>
        <Routes/>
    </ContextProvider>


  )

}

export default App;
