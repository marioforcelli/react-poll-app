import { Route, Routes } from "react-router-dom";
import CreatePoll from "../components/CreatePoll";
import PollVote from "../components/PollVote";

export default function MainRoutes(){
    return(
        <Routes>
            <Route element={<CreatePoll obj='asas'/>} path="/"/>
            <Route element={<PollVote/>} path ="/:id"/>
        </Routes>

    )

}