import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Games from "../pages/Games"
import SaveGame from "../pages/SaveGame"
import EditGame from "../pages/EditGame"
import Error from "../pages/Error"

const Paths = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/add" element={<SaveGame />} />
            <Route path="/games/edit/:id" element={<EditGame />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Paths
