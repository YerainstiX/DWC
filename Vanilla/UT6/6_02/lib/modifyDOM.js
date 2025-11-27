"use strict"

export const showMovies = (movies) => {
    let template = ""
    Array.isArray(movies) && movies.length
        ? movies.map((m) => {
              template += `<div id="${m.episode_id}>${m.title} | ${m.episode_id} </div>`
          })
        : (template =
              "A disturbance in the Force has prevented the Star Wars movies from loading. Our droids are working on it—please try again shortly.")
    return template
}

export const showInfo = (movies, id) => {

}
