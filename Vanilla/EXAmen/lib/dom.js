"use strict"

export const showAnime = (animes) => {
    let template = ""
    Array.isArray(animes) && animes.length
        ? animes.map(
              (anime) =>
                  (template += `<p><img src="${anime.image}" /> | ${anime.title} | ${anime.status} | Rank: ${anime.rank} </br>Synopsis</br> ${anime.synopsis}</br><button class="delete" id=${anime.id}>DELETE</button></p>`)
          )
        : "Missing"

    return template
}
