import React, { createContext, useEffect, useState } from "react"
import useAPI from "../hooks/useAPI"

const ContextDisc = createContext()

const ProviderDiscs = ({ children }) => {
    const url = "http://localhost:3000/discs"
    const [discs, setDiscs] = useState([])

    const { get, post, put, destroy } = useAPI()

    const getDiscs = async () => setDiscs(await get(url))
    const getDiscById = async (id) => await get(`${url}/${id}`)
    const saveDisc = async (body) => await post(url, body)
    const deleteDisc = async (id) => await destroy(`${url}/${id}`)
    const editDisc = async (id, body) => await put(`${url}/${id}`, body)

    useEffect(() => {
        getDiscs()
    }, [])

    const box = {
        discs,
        getDiscs,
        saveDisc,
        deleteDisc,
        editDisc,
        getDiscById,
    }
    return <ContextDisc value={box}>{children}</ContextDisc>
}

export default ProviderDiscs

export { ContextDisc }
