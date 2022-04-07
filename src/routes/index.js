import { Navigate, Route, Routes } from "react-router-dom";
import CreatePoll from "../components/CreatePoll";
import PollVote from "../components/PollVote";

export default function MainRoutes(){

    
    return(
        <Routes>
            <Route path="/" element={<CreatePoll />}/>
            <Route path="*" element={<Navigate to ="/" />}/>
            <Route path ="/:id" element={<PollVote />} />


        </Routes>

    )
   
}