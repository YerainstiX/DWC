"use strict"

export const createAnime = (title, image, status, rank, synopsis) => {
    const anime = {
        id: crypto.randomUUID(),
        title: title,
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
        title: anime.title,
        image: anime.images.jpg.image_url,
        status: anime.status,
        rank: anime.rank,
        synopsis: anime.synopsis,
    }
    return apiAnime
}
