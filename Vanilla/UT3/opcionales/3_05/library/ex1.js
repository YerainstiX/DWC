"use strict"

export const generateArray = (length) => {
    do {
        let array = [...Array(length)].map(
            () => Math.floor(Math.random() * 9) + 1
        )
    } while (duplicateArray(array))
    return array
}

/*
I use a simple logic to detect duplicates, with indexOf(num) !== i I check if the index of the number I am looking for is not the same as the i,
if isn't the same we have a duplicate and it return true
*/
export const duplicateArray = (array) => {
    return array.some((num, i) => array.indexOf(num) !== i)
}
