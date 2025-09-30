"use strict"

export const showObject = (object) => {
    for (const property in object) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
            const element = object[property]
            //ARRAY CASE
            if (Array.isArray(element)) {
                //EMPTY ARRAY
                if (element.length === 0) {
                    console.log(`The object contains an empty array (${property})`)
                    continue
                } else {
                //ARRAY NOT EMPTY
                    console.log(
                        `\tThe object contains an array (${property}) with the following elements:`
                    )
                }

                for (let i = 0; i < element.length; i++) {
                    //THE ELEMENT OF THE ARRAY IS AN OBJECT
                    if (
                        typeof element[i] === "object" &&
                        !Array.isArray(element[i])
                    ) {
                        showObject(element[i])
                        continue
                    }
                    //THE ELEMENT OF THE ARRAY IS AN ARRAY
                    if (Array.isArray(element[i])) {
                        console.log(
                            `\tThe object contains an Array (${property}) with the following elements:\n ${element.join()}`
                        )
                        continue
                    }
                    //THE ELEMENT OF THE ARRAY IS A PRIMITIVE
                   console.log(`\t${element[i]}, ${typeof element[i]}`);
                }
                continue
            }
            //FUNCTION CASE
            if (typeof element === "function") {
                console.log(
                    `\tThe object contains the this function: ${element}`
                )
                continue
            }
            //OBJECT CASE
            if (typeof element === "object" && !Array.isArray(element)) {
                console.log(
                    `\tThe object contains an object (${property}) with the following characteristics:`
                )
                showObject(element)
                continue
            }
            //PRIMITIVE CASE
            console.log(`\t${property}, ${element}, tipo: ${typeof element}`)
        }
    }
}
