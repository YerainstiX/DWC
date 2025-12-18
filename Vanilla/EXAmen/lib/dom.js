"use strict"

export const showAnime = (animes) => {
    let template = ""
    Array.isArray(animes) && animes.length
        ? animes.map(
              (anime) =>
                  (template += `<p><img src="${anime.image}" /> | ${anime.title} | ${anime.status} | Rank: ${anime.rank} </br>Synopsis</br> ${anime.synopsis}</p>`)
          )
        : "Missing"

    return template
}
