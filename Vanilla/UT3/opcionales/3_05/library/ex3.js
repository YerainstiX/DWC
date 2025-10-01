"use strict"

import { generateBidimensionalArray } from "./ex2.js"

const generateBoard = () => {
   return [generateBidimensionalArray(),generateBidimensionalArray(),generateBidimensionalArray(),
           generateBidimensionalArray(),generateBidimensionalArray(),generateBidimensionalArray(),
           generateBidimensionalArray(),generateBidimensionalArray(),generateBidimensionalArray()]
}

const validBoard = () => {
   return null
} 

const checkRow = (array) => {
for (let i = 0; i < array.length; i++) {
   const element = array[i]
   for (let j = 0; j < array[i].length; j++) {
      const element = array[j];
      
   };
   
}
}

const checkColumn = () => {

}