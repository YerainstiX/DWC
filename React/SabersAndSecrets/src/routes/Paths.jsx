import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"

import Error from "../pages/Error"
import Movies from "../pages/Movies"
import MovieDetails from "../pages/MovieDetails"
import CharacterDetails from "../pages/CharacterDetails"
import About from "../pages/About"

const Paths = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error></Error>} />
            </Routes>
        </>
    )
}

export default Paths
