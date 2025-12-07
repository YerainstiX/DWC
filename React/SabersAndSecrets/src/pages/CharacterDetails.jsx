import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../lib/getData.js"
import "./CharacterDetails.css"

const CharacterDetails = () => {
    const { id } = useParams()
    const url = `https://swapi.dev/api/people/${id}/`

    const [character, serCharacter] = useState({})

    const getCharacterInfo = async () => {
        const characterData = await getData(url)
        serCharacter(characterData)
    }

    useEffect(() => {
        getCharacterInfo()
    }, [])

    const capitalize = (str) => {
        return str && str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <>
            <div className="characterDetails-container">
                <h1>{character.name}</h1>
                <h2>Characteristics:</h2>
                <p>Gender: {capitalize(character.gender)}</p>
                <p>Height: {character.height}cm</p>
                <p>Mass: {character.mass}Kg</p>
                <p>Hair Color: {capitalize(character.hair_color)}</p>
                <p>Eye Color: {capitalize(character.eye_color)}</p>
            </div>
        </>
    )
}

export default CharacterDetails
