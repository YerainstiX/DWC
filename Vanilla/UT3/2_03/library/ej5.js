"use strict"

export const showObject = (object) => {
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key]
            if (Array.isArray(element)) {
                if (element.length === 0) {
                    console.log(`The object contains an empty array`)
                    continue
                }
                for (let i = 0; i < element.length; i++) {
                    if (
                        typeof element[i] === "object" &&
                        !Array.isArray(element(i))
                    ) {
                        console.log(
                            `The object contains an Object with the following elements:`
                        )
                        showObject(element[i])
                    } else {
                        console.log(
                            `The object contains an Array with the following elements:\n ${element.join()}`
                        )
                    }
                }

                continue
            }
            if (typeof element === "function") {
                console.log(`The object contains the this function: ${element}`)
                continue
            }
            if (typeof element === "object" && !Array.isArray(element)) {
                console.log(
                    `El objeto contiene un objeto con las siguientes caracteristicas ${showObject(
                        element
                    )}`
                )
                continue
            }
            console.log(`${key}, ${element}, tipo: ${typeof element}`)
        }
    }
}
