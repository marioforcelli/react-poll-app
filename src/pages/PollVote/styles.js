import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;



    & .wrap-questions{
        flex-direction:column; 
        margin-top: 10px;
    }

    & .wrap-poll{
        display: flex;
        flex-direction: column;
    }
    & .question-title{
        margin: 40px auto 0 auto;
    }

    & .question-container{
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        cursor: pointer;
        font-size: 22px;
        width: 70vw;
        height: 60px;
        transition: border 0.2s;
        box-shadow: 0px 0px 6px 1px rgba(198,198,198,0.9);
        border-radius: 10px;

    }

    & .question-container input{
        appearance: none;
        background-color: #fff;
        cursor: pointer;
        font: inherit;
        width: 25px;
        height: 25px;
        border: 1px solid black;
        transition: background 0.4s;
        border-radius: 10px;
        margin-left: 10px
    }
    & .question-container span{
        margin-left: 10px;
  
    }

    & .question-container input:checked{
        background-color: #5ec96e;
        padding: 10px;


       
    }

    & .send-btn{
        margin-top: 10px;
        justify-content: start;
        width: min(40vw, 182px);
        height: 50px;
        background-color: #5ec96e;
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
        transition: width 1s;
        cursor:pointer;
    }

    & .bottom-poll{
        display: flex;
        justify-content: space-between;
        align-items: center;


    }

    @media(max-width: 500px) {
             .bottom-poll{
                flex-direction: column;
            }
            .send-btn{
                margin-bottom: 20px;
            }

            .question-container{
                margin-bottom: 40px;
            }


}



`