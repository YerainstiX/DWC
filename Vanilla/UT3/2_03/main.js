"use strict"

import { createCourse } from "./library/ej1.js"
import { showCourse } from "./library/ej2.js"


console.log(
    createCourse(
        "2ºDAW",
        "2025",
        "Ayuda sáquenme de aquí voy a perder la cabeza"
    )
)

console.log(
    showCourse(
        createCourse(
            "2ºDAW",
            "2025",
            "Ayuda sáquenme de aquí voy a perder la cabeza"
        )
    )
)
