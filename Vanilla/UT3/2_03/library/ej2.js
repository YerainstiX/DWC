"use strict"

export const showCourse = (course) => {
    console.log("The course has the follow characteristics:")
    for (let property in course) {
        if (Object.prototype.hasOwnProperty.call(course, property)) {
            let element = course[property]
            if (Array.isArray(element)) { //If the element is an array we have to check it
                console.log(`${property}:`)
                if (element.length === 0) { //Check if the array is empty
                    console.log(`No hay estudiantes`);
                    continue
                }
                element.forEach((pupil) => { //To show every pupil in the array
                    if (typeof pupil === "object") {
                        console.log(`${pupil.id}: ${pupil.name}`)
                    }
                })
                continue
            }
            //If the element is not an array or a function or undefined
            if (element !== undefined && typeof element !== "function") {
                console.log(`${property}: ${element}`)
            }
        }
    }
}
