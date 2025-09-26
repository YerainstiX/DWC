"use strict"

import { pupil } from "./ej3.js"

//This a function
export const showCourse = (course) => {
    console.log("The course has the follow characteristics:")
    for (let property in course) {
        if (Object.prototype.hasOwnProperty.call(course, property)) {
            let element = course[property]
            if (Array.isArray(element)) {
                console.log(`${property}:`)
                if (element.length === 0) {
                    console.log(`No hay estudiantes`);
                    continue
                }
                element.forEach((pupil) => {
                    if (typeof pupil === "object") {
                        console.log(`${pupil.id}: ${pupil.name}`)
                    }
                })
                continue
            }
            if (element !== undefined && typeof element !== "function") {
                console.log(`${property}: ${element}`)
            }
        }
    }
}
