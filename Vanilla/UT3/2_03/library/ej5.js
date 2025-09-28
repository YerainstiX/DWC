"use strict"

export const showObject = (object) => {
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key]
            //ARRAY CASE
            if (Array.isArray(element)) {
                //EMPTY ARRAY
                if (element.length === 0) {
                    console.log(`The object contains an empty array (${key})`)
                    continue
                } else {
                    //ARRAY NOT EMPTY
                    console.log(
                        `\tThe object contains an array (${key}) with the following elements:`
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
                            `\tThe object contains an Array (${key}) with the following elements:\n ${element.join()}`
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
                    `\tThe object contains an object (${key}) with the following characteristics:`
                )
                showObject(element)
                continue
            }
            //PRIMITIVE CASE
            console.log(`\t${key}, ${element}, tipo: ${typeof element}`)
        }
    }
}
