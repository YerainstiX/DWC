import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"

import Error from "../pages/Error"
import Movies from "../pages/Movies"
import MovieDetails from "../pages/MovieDetails"

const Paths = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="*" element={<Error></Error>} />
            </Routes>
        </>
    )
}

export default Paths
