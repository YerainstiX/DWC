import React, { createContext, useEffect, useState } from "react"
import { getDataResults } from "../lib/getData"

const ContextCharacters = createContext()

const ProviderCharacters = ({ children }) => {
    const url = "https://swapi.py4e.com/api/people/"
    const [characters, setCharacters] = useState()

    const getCharacters = async () => {
        const characters = await getDataResults(url)

        const charactersWithId = characters.map((character) => {
            const id = getCharacterId(character.url)
            return { ...character, id }
        })

        setCharacters(charactersWithId)
    }

    const getCharacterId = (url) => {
        return url.split("/")[5]
    }

    useEffect(() => {
        getCharacters()
    }, [])

    const box = { characters }
    return <ContextCharacters value={box}>{children}</ContextCharacters>
}

export default ProviderCharacters

export { ContextCharacters }
