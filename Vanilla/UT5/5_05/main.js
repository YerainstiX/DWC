"use strict"

import { clearForm, showDisc } from "./lib/functions.js"
import { validateForm } from "./lib/validations.js"

window.onload = () => {
    let discs = JSON.parse(localStorage.getItem("discs")) || []
    if (typeof Storage !== undefined) {
        document.getElementById("save").addEventListener(
            "click",
            () => {
                const form = document.getElementById("form")
                const formData = new FormData(form)
                if (validateForm()) {
                    const newDisc = {
                        id: crypto.randomUUID,
                        name: formData.get("name"),
                        cover: formData.get("cover") ? "" : "Without cover",
                        singer: formData.get("singer_group"),
                        year: formData.get("year") ? "" : "Without year",
                        gender: formData.get("gender"),
                        localization: formData.get("localization_code"),
                        borrowed: formData.get("borrowed") ? null : "Missing",
                    }

                    discs = [...discs, newDisc]
                    localStorage.setItem("discs", JSON.stringify(discs))
                    clearForm(form)
                }
            },
            false
        )
    }

    document.getElementById("show").addEventListener(
        "click",
        () => {
            document.getElementById("show_container").innerHTML =
                showDisc(discs)
        },
        false
    )
}
