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
