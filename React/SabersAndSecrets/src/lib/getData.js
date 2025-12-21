"use strict"

export const getDataResults = async (url) => {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.results)
        .catch(
            () =>
                "A disturbance in the Force has prevented the Star Wars movies from loading."
        )
}

export const getData = async (url) => {
    return fetch(url)
        .then((response) => response.json())
        .catch(
            () =>
                "A disturbance in the Force has prevented the Star Wars movies from loading."
        )
}

//The vehicles and starships have pages so this is necessary
export const getDataWithPages = async (url) => {
    let allData = []

    while (url) {
        const response = await fetch(url)
        const data = await response.json()
        allData = [...allData, ...data.results]
        url = data.next
    }

    return allData
}
