"use strict"
import { getData } from "./getData.js"
import { createAnimeFromApi } from "./utils.js"
import { createAnime } from "./utils.js"

export const getLocalData = () =>
    JSON.parse(localStorage.getItem("anime")) || []

export const saveAPILocalData = async () => {
    if (typeof Storage !== undefined) {
        if (!localContains(getLocalData)) {
            let data = await getData()
            data = data.map((anime) => createAnimeFromApi(anime))
            localStorage.setItem("anime", JSON.stringify(data))
        }
    }
}

const localContains = async (data) => {
    if (!data) {
        return false
    }
    return true
}

export const resetLocalData = async () => {
    if (typeof Storage !== undefined) {
        let data = await getData()
        data = data.map((anime) => createAnimeFromApi(anime))
        localStorage.setItem("anime", JSON.stringify(data))
    }
}

export const saveLocalAnime = () => {
    if (typeof Storage !== undefined) {
        const form = document.getElementById("anime-form")
        const formData = new FormData(form)
        let data = getLocalData()
        const anime = createAnime(
            formData.get("name"),
            formData.get("image"),
            formData.get("status"),
            formData.get("rank"),
            formData.get("synopsis")
        )
        data = [...data, anime]
        localStorage.setItem("anime", JSON.stringify(data))
    }
}

export const deleteAnime = (e) => {
    const data = getLocalData().filter((anime) => e.target.id !== anime.id)
    console.log(data)
    localStorage.setItem("anime", JSON.stringify(data))
}

export const filterData = (value) => {
    value = value.toLowerCase()
    let data = getLocalData()
    data = data.filter((anime) => anime.title.toLowerCase().includes(value))
}
