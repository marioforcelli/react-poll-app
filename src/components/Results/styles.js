import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

`
export const Title = styled.h1`
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
`

export const VoteItem = styled.div`
    height: 120px;
    width: min(80vw, 1000px);
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 6px 1px rgba(198,198,198,0.9);
    margin: 10px;
    padding: 20px;
    border-radius: 5px;
    flex-direction: column;

    & span{
        font-size: 24px;
        font-weight: 500
    }

    & div {
        display: flex;
        justify-content: space-between;
    }
`

export const ProgressBar = styled.div`
    width: 100%
    min-height: 2px;
    height: 12px;
    background-color: rgba(198,198,198,0.5);
    border-radius: 10px;
`

export const FillProgress = styled.div`
    
    width: ${props => props.width}%;
    background-color: #5ec96e;
    min-height: 2px;
    height: 12px;
    z-index: 2;
    border-radius: 10px;

`
