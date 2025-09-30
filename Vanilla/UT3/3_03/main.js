"use strict"

import { createCourse } from "./library/ej1.js"
import { showCourse } from "./library/ej2.js"
import { pupil } from "./library/ej3.js"
import { pupil2 } from "./library/ej3.js"
import { showObject } from "./library/ej5.js"

//EX1
console.log(`\nEX1\n`);
console.log(`-------------------------------------------\n`);
console.log(
    createCourse(
        "2ºDAW",
        "2025",
        "Ayuda sáquenme de aquí voy a perder la cabeza"
    )
)
//EX2
console.log(`\nEX2\n`);
console.log(`-------------------------------------------\n`);
showCourse(
    createCourse("2ºDAW", 2025, "Ayuda sáquenme de aquí voy a perder la cabeza")
)

   
//EX3
console.log(`\nEX3\n`);
console.log(`-------------------------------------------\n`);
console.log(`The pupil has this average: ${pupil.calculateAverage()}`)
console.log(pupil.showHobbies())
console.log(pupil.printReport())


//EX4
console.log(`\nEX4\n`);
console.log(`-------------------------------------------\n`);
const course = createCourse(
    "2ºDAW",
    "2025",
    "Ayuda sáquenme de aquí voy a perder la cabeza"
)

showCourse(course)
console.log(`-------------------------------------------\n`);
course.matriculate(pupil)

showCourse(course)
console.log(`-------------------------------------------\n`);
course.matriculate(pupil2)

showCourse(course)

//EX5
console.log(`\nEX5\n`);
console.log(`-------------------------------------------\n`);
showObject({
    letter: "L",
    number: 3019, 
    obj: {
        helloWorld: ["Mordor", "Gondor"],
        num: 123456,
        obj3: {
            testJ: "Frodo",
            testZ: "Sam",
            obj4: {
                fact: "The One Ring whispered and Boromir tried to steal it",
                method: function () {
                    console.log("I'm Aragorn's method: For Frodo!")
                },
                arrow: () => {
                    console.log("I'm Legola's arrow that never misses")
                },
                finalObj: {
                    value: "Mithril",
                    superFinal: { final: "Mount Doom" },
                },
                status: true, //The Fellowship is still united
            },
        },
    },
    arrayTest: ["Ring", "Sword", "Bow", "Axe", "Elf", "Dwarf", "Orc", "Troll", "Ent", true],
    finalFunc: function () {
        console.log("I'm the final function that summons Gandalf the White with his magic light")
    },
})
console.log(`-------------------------------------------\n`);
showObject(course)