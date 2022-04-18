import logo from './logo.svg';
import './App.css';
import { GlobalStyles} from './styles/styles'
import Header from './components/Header/'
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom'
import {useEffect, useState} from 'react'
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
