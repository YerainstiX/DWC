"use strict"
//To make the template of the movies
export const showMovies = (movies) => {
    let template = ""
    Array.isArray(movies) && movies.length
        ? movies.map((m) => {
              template += `<li id="${m.episode_id}" class="movie">${m.episode_id} | ${m.title}</li>`
          })
        : (template =
              "A disturbance in the Force has prevented the Star Wars movies from loading. Our droids are working on it—please try again shortly.")
    return template
}
/*
* To make the template of the info for the movie clicked on
* Line 26 to transform the date into Spanish form
*/
export const showInfo = (movies, id) => {
    let template = ""
    Array.isArray(movies) && movies.length
        ? movies
              .filter((m) => m.episode_id.toString() === id)
              .map((m) => {
                  template = `<div>
                    <h1>${m.title}</h1>
                    <h2>Director: ${m.director} | Producer: ${m.producer}</h2>
                    <h3>${new Date(m.release_date).toLocaleString("es-ES").split(",")[0]}</h3> 
                    <p>${m.opening_crawl}</p>
                    </div>`
              })
        : (template =
              "A disturbance in the Force has prevented the Star Wars movies from loading. Our droids are working on it—please try again shortly.")
    return template
}
