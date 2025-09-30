"use strict"

export const generateArray = () => {
       return [...Array(10)].map(() => Math.floor(Math.random() * 10 + 1)) //I use floor to round the number, and I multiply to 10 + 1 to make sure de result is always between 1-10
}

export const filterAndCombineArray = (...arrays) => {
    return arrays.flat().filter(num => num > 5)
}