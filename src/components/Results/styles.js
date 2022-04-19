import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

`
export const Title = styled.h1`
    font-size: 33px;
    font-weight: 500;
    margin-bottom: 20px;
`

export const VoteItem = styled.div`
    height: 120px;
    width: min(80vw, 870px);
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 6px 1px rgba(198,198,198,0.9);
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
`