import React from "react"
import { createContext } from "react"
import { useAPI } from "../hooks/useAPI"
import { useState } from "react"
import { useEffect } from "react"

const ContextCharacters = createContext()

const ProviderCharacters = ({ children }) => {
    const URL = "http://localhost:3000/characters"
    const [characters, setCharacters] = useState([])

    const { loading, errors, get, post, put, destroy } = useAPI()

    const getCharacters = async () => {
        const data = await get(URL)

        const charactersWithID = await data.map((char, i) => {
            return { ...char, cheatID: i + 1 }
        })

        setCharacters(charactersWithID)
    }

    const getCharacterById = async (id) => await get(`${URL}/${id}`)

    const saveCharacter = async (body) => await post(URL, body)

    const editCharacter = async (id, body) => await put(`${URL}/${id}`, body)

    const deleteCharacter = async (id) => await destroy(`${URL}/${id}`)

    useEffect(() => {
        getCharacters()
    }, [])

    const box = {
        loading,
        errors,
        characters,
        getCharacters,
        getCharacterById,
        saveCharacter,
        editCharacter,
        deleteCharacter,
    }

    return <ContextCharacters value={box}>{children}</ContextCharacters>
}

export default ProviderCharacters

export { ContextCharacters }
