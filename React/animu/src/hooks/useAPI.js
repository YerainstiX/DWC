import React, { useState } from "react"

const useAPI = () => {
    const [loading, setLoad] = useState(false)
    const [errors, setErrors] = useState(null)

    const request = async (url, options = {}) => {
        setLoad(true)
        setErrors(null)

        try {
            const response = await fetch(url, {
                method: options.method,
                headers: { Content_type: "application/json", ...options.headers },
                body: options.body ? JSON.stringify(options.body) : undefined,
            })

            if (!response.ok)
                throw new Error(`Error fetching API ${response.status} | ${response.statusText}`)

            return response.json()
        } catch (error) {
            setErrors(error)
            throw error
        } finally {
            setLoad(false)
        }
    }

    const get = async (url) => request(url, { method: "GET" })

    const post = async (url, body) => request(url, { method: "POST", body: body })

    const put = async (url, body) => request(url, { method: "PUT", body: body })

    const destroy = async (url) => request(url, { method: "DELETE" })

    return { loading, errors, get, post, put, destroy }
}

export default useAPI
