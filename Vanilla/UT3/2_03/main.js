"use strict"

import { createCourse } from "./library/ej1.js"
import { showCourse } from "./library/ej2.js"
import { pupil } from "./library/ej3.js"
import { pupil2 } from "./library/ej3.js"
import { showObject } from "./library/ej5.js"

//EX1
/* 
console.log(
    createCourse(
        "2ºDAW",
        "2025",
        "Ayuda sáquenme de aquí voy a perder la cabeza"
    )
)
//EX2

showCourse(
    createCourse("2ºDAW", 2025, "Ayuda sáquenme de aquí voy a perder la cabeza")
)

   
//EX3
console.log(pupil.calculateAverage())
console.log(pupil.showHobbies())
console.log(pupil.printReport())
*/

//EX4
const course = createCourse(
    "2ºDAW",
    "2025",
    "Ayuda sáquenme de aquí voy a perder la cabeza"
)

//showCourse(course)

course.matriculate(pupil)
course.matriculate(pupil2)

//showCourse(course)

//EX5
showObject({
    letter: "a",
    number: 5,
    obj: {
        helloWorld: ["Hello", "World"],
        num: 82546257,
        obj3: {
            testJ: "Bye",
            testZ: "World",
            obj4: {
                fact: "Google Chrome se comió la RAM de mi ordenador",
                method: function () {
                    console.log("Soy un método de Google")
                },
                arrow: () => {
                    console.log("Soy la función flecha de Google")
                },
                finalObj: {
                    value: "valor feo",
                    superFinal: { final: "Nunca" },
                },
                status: true,
            },
        },
    },
    arrayTest: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    finalFunc: function () {
        console.log("Soy una función de Chrome")
    },
})
