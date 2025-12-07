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
