import React from "react"
import movies from "../assets/movies.json"
import Interprete from "./Interprete"
import "./AllActors.css"

//Here I show all the actors of movies.json
const AllActors = () => {
    const mov = movies.movies
    const cast = mov.flatMap((movie) => movie.cast)
    return (
        <>
            <div className="allactors_container">
                {cast.map((actor, index) => (
                    <Interprete
                        key={index}
                        nombre={actor.name}
                        foto={actor.photo}
                    >
                        {actor.description}
                    </Interprete>
                ))}
            </div>
        </>
    )
}

export default AllActors
