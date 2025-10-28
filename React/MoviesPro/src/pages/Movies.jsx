import movies from "../assets/movies.json"
import Movie from "../components/Movie"

//The view to show all the movies
const Movies = () => {
    const mov = movies.movies

    return (
        <>
            <div className="movies_container">
                <div className="movies_grid">
                    {mov.map((movie, index) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            director={movie.director}
                            year={movie.year}
                            image={movie.image}
                            summary={movie.summary}
                            cast={movie.cast}
                        ></Movie>
                    ))}
                </div>
                
            </div>
        </>
    )
}

export default Movies
