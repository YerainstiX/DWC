import { useContext } from "react"
import { ContextDisc } from "../context/ProviderDiscs"

const useDiscContext = () => {
    const ctx = useContext(ContextDisc)
    if (!ctx) throw new Error(`Error getting discs content`)
    return ctx
}

export default useDiscContext
