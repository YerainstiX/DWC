import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import AddDisc from "../pages/AddDisc"
import Discs from "../pages/Discs"
import DiscDetails from "../pages/DiscDetails"
import Error from "../pages/Error"

const Paths = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-disc" element={<AddDisc />} />
                <Route path="/discs" element={<Discs />} />
                <Route path="/disc/:id" element={<DiscDetails />} />
                <Route path="*" element={<Error></Error>} />
            </Routes>
        </>
    )
}

export default Paths
