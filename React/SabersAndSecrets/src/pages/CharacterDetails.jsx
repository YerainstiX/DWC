import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import "./CharacterDetails.css"
import { ContextCharacters } from "../context/ProviderCharacters.jsx"
import { ContextVehicles } from "../context/ProviderVehicles.jsx"
import { ContextStarship } from "../context/ProviderStarships.jsx"
import Vehicle from "../components/Vehicle.jsx"
import Starship from "../components/Starship.jsx"

const CharacterDetails = () => {
    const { id } = useParams()

    const { characters } = useContext(ContextCharacters)
    const { vehicles } = useContext(ContextVehicles)
    const { starship } = useContext(ContextStarship)

    const [character, setCharacter] = useState(null) // Cambiado a null para validar mejor
    const [characterVehicles, setCharacterVehicles] = useState([])
    const [characterStarship, setCharacterStarship] = useState([])

    const [showVehicleStarship, setShowVehicleStarship] = useState(false)

    // Funciones auxiliares (ID split)
    const getVehicleId = (url) => url.split("/")[5]
    const getStarshipId = (url) => url.split("/")[5]
    const capitalize = (str) =>
        str ? str.charAt(0).toUpperCase() + str.slice(1) : ""

    const getCharacterInfo = () => {
        const found = characters.find((c) => c.id === id)
        setCharacter(found)
    }

    const getCharacterVehicles = () => {
        if (character && character.vehicles && character.vehicles.length > 0) {
            const vehiclesId = character.vehicles.map((url) =>
                getVehicleId(url)
            )
            const filteredVehicles = vehicles.filter((v) =>
                vehiclesId.includes(String(v.id))
            )
            setCharacterVehicles(filteredVehicles)
        } else {
            setCharacterVehicles([])
        }
    }

    const getCharacterStarship = () => {
        if (
            character &&
            character.starships &&
            character.starships.length > 0
        ) {
            const starshipId = character.starships.map((url) =>
                getStarshipId(url)
            )
            const filteredStarship = starship.filter((s) =>
                starshipId.includes(String(s.id))
            )
            setCharacterStarship(filteredStarship)
        } else {
            setCharacterStarship([])
        }
    }

    // Efectos encadenados (Manteniendo tu lógica original)
    useEffect(() => {
        if (characters && characters.length > 0) getCharacterInfo()
    }, [characters, id])

    useEffect(() => {
        if (character && vehicles) getCharacterVehicles()
    }, [character, vehicles])

    useEffect(() => {
        if (character && starship) getCharacterStarship()
    }, [character, starship])

    return (
        <>
            {character ? (
                <>
                    <div className="characterDetails-container">
                        <h1>{character.name}</h1>
                        <h2>Characteristics:</h2>
                        <p>Gender: {capitalize(character.gender)}</p>
                        <p>Height: {character.height}cm</p>
                        <p>Mass: {character.mass}Kg</p>
                        <p>Hair Color: {capitalize(character.hair_color)}</p>
                        <p>Eye Color: {capitalize(character.eye_color)}</p>
                        <button
                            onClick={() =>
                                setShowVehicleStarship(!showVehicleStarship)
                            }
                        >
                            Pilota
                        </button>
                    </div>
                    <div
                        id="vehicles_starship"
                        className={
                            showVehicleStarship ? "" : "characterDetails-hidden"
                        }
                    >
                        <div>
                            <h3>Vehicles:</h3>
                            {characterVehicles.length > 0 ? (
                                <div className="characterDetails-Vehicles">
                                    {characterVehicles.map((v) => (
                                        <Vehicle
                                            key={v.id}
                                            name={v.name}
                                            model={v.model}
                                            type={v.vehicle_class}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <h1>This character doesn't have vehicles</h1>
                            )}
                        </div>

                        <div>
                            <h3>Starships:</h3>
                            {characterStarship.length > 0 ? (
                                <div className="characterDetails-Starship">
                                    {characterStarship.map((s) => (
                                        <Starship
                                            key={s.id}
                                            name={s.name}
                                            model={s.model}
                                            type={s.starship_class}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <h1>This character doesn't have starships</h1>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h1>Loading...</h1>
                </>
            )}
        </>
    )
}

export default CharacterDetails
