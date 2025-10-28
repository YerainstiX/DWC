import React from "react"
import { Routes, Route } from "react-router-dom"
import Start from "../pages/Start.jsx"
import Actors from "../pages/Actors.jsx"
import About from "../pages/About.jsx"
import Error from "../pages/Error.jsx"
import Movies from "../pages/Movies.jsx"
import MovieDetails from "../components/MovieDetail.jsx"
import Gallery from "../pages/Gallery.jsx"
import GalleryFiltered from "../pages/GalleryFiltered.jsx"

const Paths = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Start />}></Route>
                <Route path="/movies" element={<Movies />} />
                {/* I implement this using the id field of the movies.json, to aced MovieDetails */}
                <Route path="/movies/:id" element={<MovieDetails />} />
                <Route path="/actors" element={<Actors />}></Route>
                <Route path="/gallery" element={<Gallery />}>
                    <Route
                        path="title"
                        element={<GalleryFiltered title="Feo titulo" />}
                    ></Route>
                    <Route
                        path="actor"
                        element={<GalleryFiltered title="Feo actor" />}
                    ></Route>
                    <Route
                        path="director"
                        element={<GalleryFiltered title="Feo director" />}
                    ></Route>
                </Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<Error></Error>} />
            </Routes>
        </>
    )
}

export default Paths
