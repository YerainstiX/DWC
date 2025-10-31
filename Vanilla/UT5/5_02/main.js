"use strict"

window.onload = () => {
    //EX1
    const container = document.querySelector(".container_ex1")

    container.addEventListener(
        "click",
        (event) => {
            if (event.target.classList.contains("odd")) {
                const sibling = event.target.nextElementSibling

                if (sibling && sibling.classList.contains("even")) {
                    sibling.classList.toggle("hidden")
                }
            }
        },
        false
    )

    //===================================================================
    //EX2

    const tabs = document.querySelector(".tabs")
    const content = document.querySelector(".content")

    tabs.addEventListener(
        "click",
        (event) => {
            //I get the index of the tab where I'm clicking
            const index = [...tabs.children].indexOf(event.target)

            //I apply the class hidden to every element of content
            Array.from(content.children).forEach((element) => {
                element.classList.add("hidden")
            })

            //I remove the class hidden from the element corresponding with the tab
            content.children[index].classList.remove("hidden")
        },
        false
    )
} //The END
