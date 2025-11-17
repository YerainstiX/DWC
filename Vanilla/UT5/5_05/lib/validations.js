"use strict"

export const validateName = (name) => {
    let valid = true
    if (name === "") {
        document.getElementById("name_error").innerText +=
            "The name can't be empty, as me after finishing Expeditions 33\n"
        valid = false
    }
    
    if (name.length < 5) {
        document.getElementById("name_error").innerText +=
            "The name must have over 5 chars, reboot your brain\n"
        valid = false
    }

    if (name === null) {
        document.getElementById("name_error").innerText +=
            "An error has occurred, don't touch the html chief\n"
        valid = false
    }
    return valid
}

export const validateSinger = (singer) => {
    let valid = true
    if (singer === "") {
        document.getElementById("singer_error").innerText +=
            "The singer/group can't be empty, as me after finishing Expeditions 33\n"
        valid = false
    }

    if (singer.length < 5) {
        document.getElementById("singer_error").innerText +=
            "The singer/group must have over 5 chars, you can do it I trust you\n"
        valid = false
    }

    if (singer === null) {
        document.getElementById("singer_error").innerText +=
            "An error has occurred, don't touch the html chief\n"
        valid = false
    }
    return valid
}

export const validateYear = (year) => {
    let valid = true
    if (year === "") {
        document.getElementById("year_error").innerText +=
            "The year can't be empty, as me after finishing Expeditions 33\n"
        valid = false
    }
    if (year.length > 4 || year.length < 4) {
        document.getElementById("year_error").innerText +=
            "The year length must be 4 numbers, you good?\n"
        valid = false
    }

    if (parseInt(year, 10) === NaN) {
        document.getElementById("year_error").innerText +=
            "The year must be a number, you must be an NPC\n"
        valid = false
    }

    if (year === null) {
        document.getElementById("year_error").innerText +=
            "An error has occurred, don't touch the html chief\n"
        valid = false
    }
    return valid
}

export const validateGender = (gender) => {
    let valid = true
    const validOptions = ["pop", "rock", "indie", "jazz"]
    if (gender === "") {
        document.getElementById("gender_error").innerText +=
            "The gender can't be empty, as me after finishing Expeditions 33\n"
        valid = false
    }

    if (!validOptions.includes(gender)) {
        document.getElementById("gender_error").innerText +=
            "The gender must be one of the giving types, skill issue I guess\n"
        valid = falseA
    }

    if (year === null) {
        document.getElementById("gender_error").innerText +=
            "An error has occurred, don't touch the html chief\n"
        valid = false
    }
    return valid
}

export const validateLocalization = (localization) => {
    let valid = true
    const re = /^[ES-[0-9]{3}[A-Z]{2}$/

    if (localization === "") {
        document.getElementById("localization_error").innerText +=
            "The localization can't be empty, as me after finishing Expeditions 33\n"
        valid = false
    }

    if (!re.test(localization.trim())) {
        document.getElementById("localization_error").innerText +=
            "The localization must have ES- followed by 3 numbers and 2 capital letters, brain lag I guess\n"
        valid = false
    }

    if (localization === null) {
        document.getElementById("localization_error").innerText +=
            "An error has occurred, don't touch the html chief\n"
        valid = false
    }
    return valid
}

export const clearErrors = () => {
    Array.from(document.getElementsByClassName(".msg_error")).forEach(
        (element) => {
            element.innerText = ""
        }
    )
}
