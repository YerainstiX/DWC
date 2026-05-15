import { useContext } from "react"
import { ContextAnimu } from "../context/ProviderAnimu"

const useAnimu = () => {
    const ctx = useContext(ContextAnimu)
    if (!ctx) throw new Error(`Error getting animu context`)
    return ctx
}

export default useAnimu
