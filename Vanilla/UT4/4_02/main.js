"use strict"

import censureWord from "./library/ex1.js"
import { createTable } from "./library/ex2.js"
import { markPrimeNumbers } from "./library/ex2.js"
import { changeP } from "./library/ex3.js"
import { imgCarrousel } from "./library/ex4.js"

setTimeout(() => {
    censureWord()
}, 2000)

createTable(10)

setTimeout(() => {
    markPrimeNumbers()
}, 2000)

setInterval(() => {
    changeP()
}, 2000)

imgCarrousel()
