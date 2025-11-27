"use strict"

export const getData = async (url) => {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data)
        .catch((e) => "No se han podido obtener los datos")
}
