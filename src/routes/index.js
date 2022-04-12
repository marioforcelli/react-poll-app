import { Navigate, Route, Routes } from "react-router-dom";
import CreatePoll from "../components/CreatePoll";
import PollVote from "../components/PollVote";
import Results from "../components/Results";

export default function MainRoutes(){

    
    return(
        <Routes>
            <Route path="/" element={<CreatePoll />}/>
            <Route path="*" element={<Navigate to ="/" />}/>
            <Route path ="/:id" element={<PollVote />} />
            <Route path ="/results/:id" element={<Results />} />


        </Routes>

    )
   
}