import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import { Container } from "./styles"


export default function VoteSent(){
    const {pollId, pollTitle} = useContext(Context)
    return (
        <Container>
            {pollTitle? <div> 
                <span>
                    Seu voto foi computado com sucesso!
                </span>
                <Link to={`/results/${pollId}`} ><a>Ver resultados</a></Link> </div>
                    : null

            }

        </Container>
    )
}