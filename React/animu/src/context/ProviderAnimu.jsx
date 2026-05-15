import { createContext, useEffect, useState } from "react"
import useAPI from "../hooks/useAPI"

const ContextAnimu = createContext()

const ProviderAnimu = ({ children }) => {
    const URL = "http://localhost:6969/animes"
    const [animus, setAnimus] = useState([])

    const { get, post, put, destroy, loading, errors } = useAPI()

    const getAnimus = async () => setAnimus(await get(URL))

    const getAnimuById = async (id) => await get(`${URL}/${id}`)

    const saveAnimu = async (body) => await post(URL, body)

    const editAnimu = async (id, body) => await put(`${URL}/${id}`, body)

    const deleteAnimu = async (id) => await destroy(`${URL}/${id}`)

    useEffect(() => {
        getAnimus()
    }, [])

    const value = {
        getAnimus,
        getAnimuById,
        saveAnimu,
        editAnimu,
        deleteAnimu,
        animus,
        loading,
        errors,
    }

    return <ContextAnimu value={value}>{children}</ContextAnimu>
}

export default ProviderAnimu

export { ContextAnimu }
