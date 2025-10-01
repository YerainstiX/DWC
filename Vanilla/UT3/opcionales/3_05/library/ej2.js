"use strict"

import { generateArray } from "./ex1.js"
import { duplicateArray } from "./ex1.js"

export const generateBidimensionalArray = () => {
   return [[generateArray(3)],[generateArray(3)],[generateArray(3)]]
}

export const duplicateBiArray = (array) => {
    return duplicateArray(array.flat())
}