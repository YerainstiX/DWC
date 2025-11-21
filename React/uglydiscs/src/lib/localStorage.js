    "use strict"

    import { validateForm } from "./validations.js"

    export const saveData = () => {
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
    }
