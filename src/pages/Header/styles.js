import styled from 'styled-components'
import { BsCheckCircleFill} from 'react-icons/bs'


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 70px;
    font-weight: 400;
    font-size: 25px;

    & strong{
        color: green;

    }
`


export const CheckIcon = styled(BsCheckCircleFill)`
    fill: green;
    margin-right: 12px;
    width: 30px;
    height: 30px;

`

