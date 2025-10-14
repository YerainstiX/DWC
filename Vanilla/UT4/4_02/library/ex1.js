"use strict"

const censureWord = () => {
    const body = document.body
    body.innerHTML = body.innerHTML.replaceAll(
        `sexo`,
        `<span class ="censured">"Contenido censurado"</span>`
    )
}

export default censureWord
