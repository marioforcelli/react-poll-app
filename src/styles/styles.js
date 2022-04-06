import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
    body, #root, html {
        height: 100%;
        width: 100%;
        background:#f5f5f5;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
    }

`

