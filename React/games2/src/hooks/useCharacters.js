import { useContext } from "react"
import { ContextCharacters } from "../context/ProviderCharacters"

const useCharacters = () => {
    const ctx = useContext(ContextCharacters)
    if (!ctx) throw new Error("ERROR")
    return ctx
}

export default useCharacters
