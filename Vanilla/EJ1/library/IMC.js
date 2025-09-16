"use strict"

const Marcusheight = 1.7
const Marcusmass = 70
const JuanHeight = 1.8
const JuanMass = 90

function CalcImc(height, mass) {
    return mass / (height * height)
}

export function ShowCompareImc() {
    let imcMarcus = CalcImc(Marcusheight, Marcusmass)
    let imcJuan = CalcImc(JuanHeight, JuanMass)
    let imcCompare = imcMarcus > imcJuan

    return (
        "IMC Marcos = " +
        imcMarcus +
        "\nIMC Juan = " +
        imcJuan +
        "\nTiene Marcos un IMC mayor que el de Juan:" +
        imcCompare
    )
}
