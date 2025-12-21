import React, { createContext, useEffect, useState } from "react"
import { getDataWithPages } from "../lib/getData"

const ContextVehicles = createContext()

const ProviderVehicles = ({ children }) => {
    const url = "https://swapi.py4e.com/api/vehicles/"
    const [vehicles, setVehicles] = useState([])

    const getVehicles = async () => {
        const vehicles = await getDataWithPages(url)

        const vehicleWithId = vehicles.map((vehicle) => {
            const id = getVehicleId(vehicle.url)
            return { ...vehicle, id }
        })
        setVehicles(vehicleWithId)
    }

    const getVehicleId = (url) => {
        return url.split("/")[5]
    }

    useEffect(() => {
        getVehicles()
    }, [])

    const box = { vehicles }
    return <ContextVehicles value={box}>{children}</ContextVehicles>
}

export default ProviderVehicles

export { ContextVehicles }
