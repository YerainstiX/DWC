import { createContext, useEffect, useState } from "react"
import useApi from "../hooks/useApi"

const ContextCharacters = createContext()

const ProviderCharacters = ({ children }) => {
    const URL = "http://localhost:3000/characters"
    const [characters, setcharacters] = useState([])

    const { loading, errors, get, post, put, destroy } = useApi()

    const getCharacters = async () => {
        const data = await get(URL)
        //While I was doing this only god and I knew what we're doing now it only belongs to god
        const charsWithID = data.map((d, i) => {
            return { ...d, cheatID: i + 1 }
        })
        setcharacters(charsWithID)
    }

    const saveCharacter = async (body) => await post(URL, body)

    const editCharacter = async (body, id) => await put(`${URL}/${id}`, body)

    const deleteCharacter = async (id) => await destroy(`${URL}/${id}`)

    useEffect(() => {
        getCharacters()
    }, [])

    const box = {
        characters,
        loading,
        getCharacters,
        saveCharacter,
        editCharacter,
        deleteCharacter,
    }

    return <ContextCharacters value={box}>{children}</ContextCharacters>
}

export default ProviderCharacters

export { ContextCharacters }
