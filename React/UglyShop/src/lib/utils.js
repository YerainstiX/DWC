"use strict"

export const saveProduct = (formData) => {
    const newData = {
        name: formData.name,
        weight: Number(formData.weight),
        price: Number(formData.price),
        image_url: formData.image_url,
        description: formData.description,
    }
    return newData
}

export const changeFormat = (input) => {
    return input?.toFixed(2).toString().replace(".", ",")
}

const formatPrettyDate = (date) => {
    return new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date))
}
