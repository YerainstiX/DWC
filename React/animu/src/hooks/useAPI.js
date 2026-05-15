import { useState } from "react"

const useAPI = () => {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)

    const request = async (url, options = {}) => {
        setLoading(true)
        setErrors(null)

        try {
            const response = await fetch(url, {
                method: options.method,
                headers: { Content_Type: "application.json", ...options.headers },
                body: options.body ? JSON.stringify(options.body) : undefined,
            })

            if (!response.ok)
                throw new Error(`Error fetching ${response.status} | ${response.statusText}`)

            return await response.json()
        } catch (error) {
            setErrors(error)
            throw error
        } finally {
            setLoading(false)
        }
    }

    const get = async (url) => await request(url, { method: "GET" })

    const post = async (url, body) => await request(url, { method: "POST", body: body })

    const put = async (url, body) => await request(url, { method: "PUT", body: body })

    const destroy = async (url) => await request(url, { method: "DELETE" })

    return { get, post, put, destroy, loading, error: errors }
}

export default useAPI
