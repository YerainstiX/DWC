import { useState } from "react"

const useAPI = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = async (url, options = []) => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(url, {
                method: options.method,
                headers: {
                    "Content-Type": "application/json",
                    ...options.headers,
                },
                body: options.body ? JSON.stringify(options.body) : undefined,
            })

            if (!response.ok) {
                throw new Error(
                    `Something went wrong: ${response.status} | ${response.statusText}`
                )
            }

            return await response.json()
        } catch (e) {
            setError(e.message || "Something went wrong")
            throw e
        } finally {
            setLoading(false)
        }
    }

    const get = async () => await request(url, { method: "GET" })

    const post = async () => await request(url, { method: "POST", body: body })

    const put = async () => await request(url, { method: "PUT", body: body })

    const patch = async () => await request(url, {method: "PATCH", body: body})

    const destroy = async () => await request(url, {method: "DELETE"} )

    return {get, post, put, patch, destroy, loading, error}
}

export default useAPI
