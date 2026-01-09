import React, { createContext, useEffect, useState } from "react"

const ContextDisc = createContext()

const ProviderDiscs = ({ children }) => {
    const url = "http://localhost:3000/discs"
    const [discs, setDiscs] = useState([])

    const getDiscs = async () => {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(
                    `Error on getDisc: ${response.status} | ${response.statusText}`
                )
            }
            const data = await response.json()
            return data
        } catch (e) {
            throw e
        }
    }

    const saveDisc = async (data) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
            })
            if (!response.ok) {
                throw new Error(
                    `Error on saveDisc: ${response.status} | ${response.statusText}`
                )
            }
        } catch (error) {
            throw error
        }
    }

    const deleteDisc = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "DELETE",
            })
            if (!response.ok) {
                throw new Error(
                    `Error on deleteDisc: ${response.status} | ${response.statusText}`
                )
            }
        } catch (error) {
            throw error
        }
    }

    const editDisc = async (id, data) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "PUT",
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error(
                    `Error on editDisc: ${response.status} | ${response.statusText}`
                )
            }
        } catch (error) {
            throw error
        }
    }

    const loadDiscs = async () => {
        let data = await getDiscs()
        setDiscs(data)
    }

    useEffect(() => {
        loadDiscs()
    }, [])

    const box = {
        discs,
        loadDiscs,
        saveDisc,
        deleteDisc,
        editDisc,
    }
    return <ContextDisc value={box}>{children}</ContextDisc>
}

export default ProviderDiscs

export { ContextDisc }
