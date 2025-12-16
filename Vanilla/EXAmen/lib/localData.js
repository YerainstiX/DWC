"use strict"
import { getData } from "./getData.js"

export const localContains = async () => {
    if (typeof Storage !== undefined) {
        let localData = JSON.parse(localStorage.getItem("anime"))
        console.log(localData)
        if (!localData) {
            const data = await getData()
            localStorage.setItem("anime", JSON.stringify(data))
            localData = data
        }
    }
}

export const resetLocalData = async () => {
    if (typeof Storage !== undefined) {
        const data = await getData()
        localStorage.setItem("anime", JSON.stringify(data))
    }
}
