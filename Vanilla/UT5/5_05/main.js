"use strict"

import {
    clearErrors,
    validateGender,
    validateLocalization,
    validateName,
    validateSinger,
    validateYear,
} from "./lib/validations.js"

window.onload = () => {
    document.getElementById("save").addEventListener(
        "click",
        () => {
            clearErrors()
            const form = document.getElementById("form")
            const formData = new FormData(form)
            if (!validateName(formData.get("name"))) {
                document.getElementById("name").classList.toggle("validation_error")
            } else {
            }

            if (!validateSinger(formData.get("singer_group"))) {
                document.getElementById("singer_group").classList.toggle("validation_error")
            } else {
            }

            if (!validateYear(formData.get("year"))) {
                document.getElementById("year").classList.toggle("validation_error")
            } else {
            }

            if (!validateGender(formData.get("gender"))) {
                document.getElementById("ngenderame").classList.toggle("validation_error")
            } else {
            }

            if (!validateLocalization(formData.get("localization_code"))) {
                document.getElementById("localization_code").classList.toggle("validation_error")
            } else {
            }

        },
        false
    )
}
