"use strict"
//Import for ex1
import { names } from "./library/ej1.js"
import { namesUpper } from "./library/ej1.js"
import { reverseOrder } from "./library/ej1.js"
import { namesJSON } from "./library/ej1.js"

//Import for ex2
import { generateArray } from "./library/ej2.js"
import { filterAndCombineArray } from "./library/ej2.js"

//Import for ex3
import { users } from "./library/ej3.js"
import { addUser } from "./library/ej3.js"
import { plus18 } from "./library/ej3.js"
import { yahooServer } from "./library/ej3.js"
import { megaFilter } from "./library/ej3.js"
import { missingData } from "./library/ej3.js"
import { addLastName } from "./library/ej3.js"
import { addPostalCode } from "./library/ej3.js"

console.log(`EX1`)
console.log(`-------------------------------------------\n`)
console.log(`Array in uppercase:`)
console.log(namesUpper(names).join())
console.log(`Alphabetical reversed order Array:`)
console.log(reverseOrder(names).join())
console.log(`Array with JSON object:`)
console.table(JSON.stringify(namesJSON(names), null, 2))

console.log(`\nEX2`)
console.log(`-------------------------------------------\n`)
const array1 = generateArray()
const array2 = generateArray()
const array3 = generateArray()
console.log(`First array`)
console.log(array1.join())
console.log(`Second array`)
console.log(array2.join())
console.log(`Third array`)
console.log(array3.join())
console.log(`Filtered and combined array`)
const combinedArray = filterAndCombineArray(array1, array2, array3)
console.log(combinedArray.join())

console.log(`\nEX3`)
console.log(`-------------------------------------------\n`)
console.log(`Result of the function addUser Aragorn:`)
console.log(
    JSON.stringify(
        addUser({
            nombre: "Aragorn",
            preferencias: { tema: "oscuro", idioma: "elfico", edad: 70 },
            contacto: {
                direccion: {
                    calle: "Montaraz, 76",
                    localidad: "Rivendel",
                    pais: "Tierra media",
                },
                correoelectronico: "correofalso@yahoo.com",
                telefono: "123456789",
            },
        }),
        null,
        2
    )
)

console.log(`Result of the function users +18:`)
console.log(JSON.stringify(plus18(users), null, 2))
console.log(`Result of the function users using yahoo server:`)
console.log(JSON.stringify(yahooServer(users), null, 2))
console.log(
    `Result of the function to filter with white theme, +18 and from Spain:`
)
console.log(JSON.stringify(megaFilter(users), null, 2))
console.log(`Result of the function to see the users with missing data:`)
console.log(JSON.stringify(missingData(users), null, 2))
console.log(
    `Result of the function to add a fiel to the JSON object with the last name`
)
console.log(JSON.stringify(addLastName(users), null, 2))
console.log(`Result of the function `)
