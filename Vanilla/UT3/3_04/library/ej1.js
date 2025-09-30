"use strict"

export const names = ["Gandalf", "Aragorn", "Samwise the Brave", "Frodo", "Faramir"]

export const namesUpper = (names) => {
   return names.map((name) => name.toUpperCase())
    }

export const reverseOrder = (names) => {
    return [...names].sort().reverse()
}

export const namesJSON = (names) => {
    const namesJSON = []
    for (let i = 0; i < names.length; i++) {
        namesJSON.push({ 
            id: i, 
            name: names[i] 
        })
    }
    return namesJSON
}
