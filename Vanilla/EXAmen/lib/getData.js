"use strict"

export const getData = async () => {
    const url = "https://api.jikan.moe/v4/anime"
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error("ERROR")
        const datos = await response.json()
        return datos.data
    } catch (e) {
        throw e
    }
}
