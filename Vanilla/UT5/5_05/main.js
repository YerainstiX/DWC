"use strict"

import { clearForm, deleteDisc, showDisc } from "./lib/functions.js"
import { validateForm } from "./lib/validations.js"

window.onload = () => {
    /*********************************************************************
     * Save
     *********************************************************************/

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
                        cover: formData.get("cover") || "Without cover",
                        singer: formData.get("singer_group"),
                        year: formData.get("year") || "Without year",
                        gender: formData.get("gender"),
                        localization: formData.get("localization_code"),
                        borrowed: formData.get("borrowed") || "Missing",
                    }

                    discs = [...discs, newDisc]
                    localStorage.setItem("discs", JSON.stringify(discs))
                    clearForm(form)
                }
            },
            false
        )
    }

    /*********************************************************************
     * Show
     *********************************************************************/

    document.getElementById("show").addEventListener(
        "click",
        () => {
            document.getElementById("show_container").innerHTML +=
                showDisc(discs)
        },
        false
    )

    /*********************************************************************
     * Delete
     *********************************************************************/

    document.getElementById("show_container").addEventListener(
        "click",
        (e) => {
            if (e.target.classList.contains("delete")) {
                if (confirm("Delete disc?")) {
                    discs = deleteDisc(discs, e.target.id)
                    localStorage.setItem("discs", JSON.stringify(discs))
                    showDisc(discs)
                }
            }
        },
        false
    )

    document.getElementById("clear").addEventListener(
        "click",
        () => {
            localStorage.clear()
            showDisc()
        },
        false
    )
} //THE END
