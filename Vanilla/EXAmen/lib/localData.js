"use strict"
import { getData } from "./getData.js"
import { createAnimeFromApi } from "./utils.js"

export const localData = JSON.parse(localStorage.getItem("anime"))

export const saveAPILocalData = async () => {
    if (typeof Storage !== undefined) {
        if (!localContains(localData)) {
            const data = await getData()
            const localData = data.map((anime) => createAnimeFromApi(anime))
            localStorage.setItem("anime", JSON.stringify(localData))
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
        const data = await getData()
        const localData = data.map((anime) => createAnimeFromApi(anime))
        localStorage.setItem("anime", JSON.stringify(localData))
    }
}
