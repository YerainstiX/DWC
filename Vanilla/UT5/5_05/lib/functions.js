"use strict"

export const clearForm = (form) => {
    form.reset()
}

export const showDisc = (json) => {
    let texto = ""
    json.map((v) => {
        texto += `
            <tr>
                <td>${v.name}</td>
                <td><img src="${v.cover}" alt="No cover" ></td>
                <td>${v.singer}</td>
                <td>${v.year}</td>
                <td>${v.gender}</td>
                <td>${v.localization}</td>
                <td>${v.borrowed}</td>
                <td><button id="${v.id}" class="delete">Delete</button></td>
            </tr>`
    })

    return texto
}

export const deleteDisc = (disc, id) => {
    return disc.filter((disc) => disc.id !== id)
}
