"use strict"

export const clearForm = (form) => {
    form.reset()
}

export const showDisc = (json) => {
    let texto = ""
    json.map((v) => {
        texto += `<div class="disc">
        <button class="delete">Delete</button>
        name: ${v.name},
        cover: <img src="${v.cover}" alt="img" >,
        singer: ${v.singer},
        year: ${v.year},
        gender: ${v.gender},
        localization: ${v.localization},
        borrowed: ${v.borrowed}
        </div>`
    })

    return texto
}

const deleteDisc = () => {}
