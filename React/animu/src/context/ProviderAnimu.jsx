import React, { createContext, useEffect, useState } from "react"
import useAPI from "../hooks/useAPI"

const ContextAnimu = createContext()

const ProviderAnimu = ({ children }) => {
    const [animus, setAnimus] = useState([])
    const URL = "http://localhost:6969/animes"
    const { loading, errors, get, post, put, destroy } = useAPI()

    const getAnimu = async () => setAnimus(await get(URL))

    const getAnimuById = async (id) => await get(`${URL}/${id}`)

    const saveAnimu = async (body) => await post(URL, body)

    const editAnimu = async (id, body) => await put(`${URL}/${id}`, body)

    const deleteAnimu = async (id) => await destroy(`${URL}/${id}`)

    useEffect(() => {
        getAnimu()
    }, [])

    const box = {
        animus,
        loading,
        errors,
        getAnimu,
        getAnimuById,
        saveAnimu,
        editAnimu,
        deleteAnimu,
    }

    return <ContextAnimu value={box}>{children}</ContextAnimu>
}

export default ProviderAnimu

export { ContextAnimu }
