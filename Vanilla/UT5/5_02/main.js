"use strict"

window.onload = () => {
    const container = document.querySelector(".container_ex1")

    container.addEventListener(
        "click",
        (event) => {
            if (event.target.classList.contains("odd")) {
                event.target.nextElementSibling.classList.contains("oculto")
            }
        },
        false
    )
} //The END
