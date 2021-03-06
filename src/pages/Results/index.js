import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "../../components/Loading";
import { Context } from "../../context/Context"
import { Container, FillProgress, ProgressBar, Title, VoteItem } from "./styles";

export default function Results() {
    const {getPoll, pollTitle, questions} = useContext(Context)
    const { id } = useParams();
    const totalVotes = questions.map(i=> i.votes).reduce((acc, el) => el += acc, 0)


useEffect(()=>{
    getPoll(id)
    

}, [])

    return(
        

        <Container>
           
            <Title>{pollTitle}</Title>
            {questions.length === 0 ? <Loading/> : questions.map((i, index) => {
                return(
                    <div>
                        
                        <VoteItem>
                            <div>
                            <span>
                                {i.question}
                            </span>
                            <span>
                                {totalVotes? `${(questions[index].votes / totalVotes * 100).toFixed(2)}%`: null}
                            </span>
                            </div>

                            <ProgressBar>
                                <FillProgress width={
                                    ()=>{
                                        if (totalVotes === 0){
                                            return 0;
                                        }
                                        return questions[index].votes / totalVotes * 100
                                    }
                                }/>
                            </ProgressBar>
                        </VoteItem>
                    </div>

                )

            })}
        </Container>
    )
    
}