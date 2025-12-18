"use strict"

export const createAnime = (name, image, status, rank, synopsis) => {
    const anime = {
        id: crypto.randomUUID(),
        name: name,
        image: image || "No image",
        status: status || "Unknown",
        rank: rank,
        synopsis: synopsis,
    }
    return anime
}

export const createAnimeFromApi = (anime) => {
    const apiAnime = {
        id: crypto.randomUUID(),
        name: anime.title,
        image: anime.images.jpg.image_url,
        status: anime.status,
        rank: anime.rank,
        synopsis: anime.synopsis,
    }
    return apiAnime
}
