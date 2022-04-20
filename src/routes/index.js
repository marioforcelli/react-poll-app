import { Navigate, Route, Routes } from "react-router-dom";
import CreatePoll from "../pages/CreatePoll";
import PollVote from "../pages/PollVote";
import Results from "../pages/Results";
import VoteSent from "../pages/VoteSent";

export default function MainRoutes(){

    
    return(
        <Routes>
            <Route path="/" element={<CreatePoll />}/>
            <Route path="*" element={<Navigate to ="/" />}/>
            <Route path ="/:id" element={<PollVote />} />
            <Route path ="/results/:id" element={<Results />} />
            <Route path="/voted" element={<VoteSent/>}/>


        </Routes>

    )
   
}