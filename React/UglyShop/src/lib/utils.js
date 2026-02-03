"use strict"

export const saveData = (formData) => {
    const newData = {
        name: formData.name,
        weight: Number(formData.weight),
        price: Number(formData.price),
        image_url: formData.image_url,
        description: formData.description,
    }
    return newData
}
