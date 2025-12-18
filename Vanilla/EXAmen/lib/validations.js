"use strict"

const divErrors = document.getElementById("errors")

//This file manage all the validations and errors

const validateName = (name) => {
    let valid = true
    if (!name) {
        valid = false
        divErrors.innerText = "The name can't be empty or must be a valid value"
    }
    if (!isNaN(name)) {
        valid = false
        divErrors.innerHTML = "The name can't be a number"
    }
    return valid
}

const validateRank = (rank) => {
    let valid = true
    if (!rank) {
        valid = false
        divErrors.innerText = "The rank can't be empty or must be a valid value"
    }
    if (isNaN(rank)) {
        valid = false
        divErrors.innerHTML = "The rank must be a number"
    }
    return valid
}

const validateSinopsis = (sinopsis) => {
    let valid = true
    if (!sinopsis) {
        valid = false
        divErrors.innerText =
            "The sinopsis mustn't empty or must be a valid value"
    }
    if (!isNaN(sinopsis)) {
        valid = false
        divErrors.innerHTML = "The sinopsis can't be a number"
    }
    return valid
}

const clearErrors = () => {
    divErrors.innerText = ""
}

export const validateAnime = () => {
    const form = document.getElementById("anime-form")
    const formData = new FormData(form)
    clearErrors()
    if (
        validateName(formData.get("name")) &&
        validateRank(formData.get("rank")) &&
        validateSinopsis(formData.get("synopsis"))
    ) {
        return true
    }
    return false
}
/*

            */
