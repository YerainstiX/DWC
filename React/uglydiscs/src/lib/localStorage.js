"use strict"

export const saveData = (discList, formData) => {
    const newDisc = {
        id: crypto.randomUUID(),
        name: formData.name,
        cover: formData.cover || "Without cover",
        singer: formData.singer,
        year: formData.year || "Without year",
        gender: formData.gender,
        localization: formData.localization,
        borrowed: formData.borrowed || "Missing",
    }

    const newDiscs = [...discList, newDisc]
    localStorage.setItem("discs", JSON.stringify(newDiscs))

    return newDiscs
}
