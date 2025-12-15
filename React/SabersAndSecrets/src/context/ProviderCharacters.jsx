import React, { createContext, useEffect, useState } from "react"
import { getDataResults } from "../lib/getData"

const ContextCharacters = createContext()

const ProviderCharacters = ({ children }) => {
    const url = "https://swapi.dev/api/people/"
    const [character, setCharacters] = useState()

    const getCharacters = async () => {
        const characters = await getDataResults(url)
        setCharacters(characters)
    }

    useEffect(() => {
        getCharacters()
    }, [])

    const box = { character }
    return <ContextCharacters value={box}>{children}</ContextCharacters>
}

export default ProviderCharacters

export { ContextCharacters }
