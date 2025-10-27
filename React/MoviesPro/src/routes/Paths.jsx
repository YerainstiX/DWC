import React from "react"
import { Routes, Route } from "react-router-dom"
import Start from "../pages/Start.jsx"
import Actors from "../pages/Actors.jsx"
import About from "../pages/About.jsx"
import Error from "../pages/Error.jsx"
import Movies from "../pages/Movies.jsx"
import MovieDetails from "../components/MovieDetail.jsx"

const Paths = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Start />}></Route>
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MovieDetails />}></Route>
                <Route path="/actors" element={<Actors />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<Error></Error>} />
            </Routes>
        </>
    )
}

export default Paths
