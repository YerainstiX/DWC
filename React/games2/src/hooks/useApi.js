import { useState } from "react"

const useApi = () => {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)

    const request = async (url, options = {}) => {
        setLoading(true)
        setErrors(null)
        try {
            const response = await fetch(url, {
                method: options.method,
                headers: { "Content-Type": "application/json", ...options.headers },
                body: options.body ? JSON.stringify(options.body) : undefined,
            })

            if (!response.ok)
                throw new Error(`Error fetching API ${response.status} | ${response.statusText}`)

            return await response.json()
        } catch (error) {
            setErrors(error)
            throw error
        } finally {
            setLoading(false)
        }
    }

    const get = (url) => request(url, { method: "GET" })
    const post = (url, body) => request(url, { method: "POST", body: body })
    const put = (url, body) => request(url, { method: "PUT", body: body })
    const destroy = (url) => request(url, { method: "DELETE" })

    return { loading, errors, get, post, put, destroy }
}

export default useApi
