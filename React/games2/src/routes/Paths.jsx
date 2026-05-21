import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Games from "../pages/Games"
import GameDetails from "../pages/GameDetails"
import Error from "../pages/Error"
import EditGame from "../pages/EditGame"

const Paths = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:id" element={<GameDetails />} />
            <Route path="/games/:id/edit" element={<EditGame />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Paths
