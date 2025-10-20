"use strict"

//I don't know what to comment here so here is a quote -> "Rip and tear… until it is done💀🔥"
const censureWord = () => {
    const body = document.body
    body.innerHTML = body.innerHTML.replaceAll(
        `sexo`,
        `<span class ="censured">"Contenido censurado"</span>`
    )
}

export default censureWord
