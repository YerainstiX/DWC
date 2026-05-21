import React, { createContext, useEffect, useState } from "react"
import useAPI from "../hooks/useAPI"

const ContextAnimu = createContext()

const ProviderAnimu = ({ children }) => {
    const URL = "http://localhost:6969/animes/"
    const [animus, setAnimu] = useState([])

    const { get, post, put, destroy } = useAPI()

    const getAnimus = async () => setAnimu(await get(URL))

    const getAnimuById = async (id) => await get(`${URL}/${id}`)

    const saveAnimu = async (body) => await post(URL, body)

    const editAnimu = async (id, body) => await put(`${URL}/${id}`, body)

    const deleteAmimu = async (id) => await destroy(`${URL}/${id}`)

    useEffect(() => {
        getAnimus()
    }, [])

    const box = {
        animus,
        getAnimus,
        getAnimuById,
        saveAnimu,
        editAnimu,
        deleteAmimu,
    }

    return <ContextAnimu.Provider value={box}>{children}</ContextAnimu.Provider>
}

export default ProviderAnimu

export { ContextAnimu }
