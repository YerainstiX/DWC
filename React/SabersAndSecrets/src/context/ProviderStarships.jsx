import React, { createContext, useEffect, useState } from "react"
import { getDataWithPages } from "../lib/getData"

const ContextStarship = createContext()

const ProviderStarship = ({ children }) => {
    const url = "https://swapi.py4e.com/api/starships/"
    const [starship, setStarship] = useState()

    const getStarship = async () => {
        const starship = await getDataWithPages(url)
        const starshipWithId = starship.map((starship) => {
            const id = getStarshipId(starship.url)
            return { ...starship, id }
        })
        setStarship(starshipWithId)
    }

    const getStarshipId = (url) => {
        return url.split("/")[5]
    }

    useEffect(() => {
        getStarship()
    }, [])

    const box = { starship }
    return <ContextStarship value={box}>{children}</ContextStarship>
}

export default ProviderStarship
export { ContextStarship }
