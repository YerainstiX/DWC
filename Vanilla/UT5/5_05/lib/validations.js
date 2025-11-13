"use strict"

const validateName = (name) => {
    if (name === "") return false
    if (name.length < 5) return false
    if (name === null) return false
}

const validateSinger = (singer) => {
    if (singer === "") return false
    if (singer.length < 5) return false
    if (singer === null) return false
}

const validateYear = (year) => {
    if (year === "") return false
    if (year.length > 4 || year.length < 4) return false
    if (parseInt(year, 10) === NaN) return false
}

const validateGender = () => {}

const validateLocalization = () => {}
