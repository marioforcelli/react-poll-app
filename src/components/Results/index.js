import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../../context/Context"

export default function Results() {
    const {id} = useParams()
    const [polls, setPolls] = useContext(Context)

    console.log(polls)
    return(

        <div></div>
    )
    
}