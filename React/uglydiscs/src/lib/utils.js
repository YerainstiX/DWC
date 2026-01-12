"use strict"



export const saveData = (formData) => {
    const newDisc = {
        id: crypto.randomUUID(),
        name: formData.name,
        cover: formData.cover || "Without cover",
        singer: formData.singer,
        year: formData.year || "Without year",
        gender: formData.gender || "Without gender",
        localization: formData.localization,
        borrowed: formData.borrowed || "Missing",
    }
    return newDisc
}
