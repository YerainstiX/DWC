"use strict"

import { generateArray } from "./ex1.js"
import { duplicateArray } from "./ex1.js"

export const generateBidimensionalArray = () => {
    do {
        let array = [[generateArray(3)], [generateArray(3)], [generateArray(3)]]
    } while (duplicateBiArray)
    return array
}

export const duplicateBiArray = (array) => {
    return duplicateArray(array.flat())
}
