import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: 100px;

    & h1{
        font-size: 50px;
        font-weight: 400;
        margin-bottom: 60px;
    }

    & input{
        height: 40px;
        width: 500px;
        margin: 0px 0px 20px 0px;
        padding-left: 20px;
        font-size: 25px;
        outline: none;
        border: 1px solid #969898;
        border-radius: 8px;
        background-color: transparent;
    }

    & .title{
        display: flex;
        flex-direction: column;
    }

    & a{
        font-size: 15px;
        margin-left: 4px;
        color: black;
    }

    & .poll-title-input{
        margin-top: 0;
        margin-bottom: 30px;
        height: 55px;
        width: 600px;
        font-size: 40px;
    }

    & .save-btn{
        margin-top: 10px;
        justify-content: start;
        width: 500px;
        height: 50px;
        background-color: #5ec96e;
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
        transition: ease 1s;
    }

    & .save-btn:hover{
        background-color: green;
        cursor: pointer;
    }

    & .questions{
        display: flex;
        flex-direction: column;

    }
`