import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../../context/Context"
import { Container, Title, VoteItem } from "./styles";

export default function Results() {
    const {getPoll, pollTitle, questions} = useContext(Context)
    const { id } = useParams();

useEffect(()=>{
    getPoll(id)

}, [])

    console.log(pollTitle, questions)
    return(

        <Container>
            <Title>{pollTitle}</Title>
            {questions.length === 0 ? null : questions.map(i => {
                return(
                    <div>
                        <VoteItem>{i.question}</VoteItem>

                    </div>

                )

            })}
        </Container>
    )
    
}