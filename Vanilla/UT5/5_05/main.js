"use strict"

import { clearForm, deleteDisc, showDisc } from "./lib/functions.js"
import { validateForm } from "./lib/validations.js"

window.onload = () => {
    let discs = JSON.parse(localStorage.getItem("discs")) || []
    //SAVE
    if (typeof Storage !== undefined) {
        document.getElementById("save").addEventListener(
            "click",
            () => {
                const form = document.getElementById("form")
                const formData = new FormData(form)
                if (validateForm()) {
                    const newDisc = {
                        id: crypto.randomUUID(),
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
                document.getElementById("show_container_body").innerHTML =
                    showDisc(discs)
            },
            false
        )
    }

    //SHOW
    document.getElementById("show").addEventListener(
        "click",
        (e) => {
            const table = document.getElementById("show_container_body")
            if (table.children.length === 0) {
                table.innerHTML = showDisc(discs)
            } else {
                table.innerHTML = ""
            }
        },
        false
    )

    //DELETE
    document.getElementById("show_container").addEventListener(
        "click",
        (e) => {
            if (e.target.classList.contains("delete")) {
                if (confirm("Delete disc?")) {
                    discs = deleteDisc(discs, e.target.id)
                    localStorage.setItem("discs", JSON.stringify(discs))
                    document.getElementById("show_container_body").innerHTML =
                        showDisc(discs)
                }
            }
        },
        false
    )

    //SEARCH
    //With this I don't need the button to clear the filter because is dynamic
    document.getElementById("search").addEventListener("input", (e) => {
        const text = e.target.value.toLowerCase()

        const filtered = discs.filter(
            (disc) =>
                disc.name.toLowerCase() === text ||
                disc.singer.toLowerCase() === text ||
                disc.year.toLowerCase().includes(text) ||
                disc.gender.toLowerCase().includes(text) ||
                disc.localization.toLowerCase().includes(text) ||
                disc.borrowed.toLowerCase().includes(text)
        )

        document.getElementById("show_container_body").innerHTML =
            showDisc(filtered)
    })
} //THE END
