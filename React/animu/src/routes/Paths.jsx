import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Animus from "../pages/Animus"
import SaveAnimu from "../pages/SaveAnimu"
import EditAnimu from "../pages/EditAnimu"
import AnimuDetails from "../pages/AnimuDetails"

const Paths = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/animus" element={<Animus></Animus>} />
                <Route path="/animus/:id" element={<AnimuDetails></AnimuDetails>} />
                <Route path="/animus/save" element={<SaveAnimu></SaveAnimu>} />
                <Route path="/animus/edit/:id" element={<EditAnimu></EditAnimu>} />
                <Route path="*" element={null} />
            </Routes>
        </>
    )
}

export default Paths
