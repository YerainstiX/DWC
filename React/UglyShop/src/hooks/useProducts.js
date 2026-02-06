import { useContext  } from "react"
import { ProductsContext } from "../context/ProviderProducts"

const useProducts = () => {
    const ctx = useContext(ProductsContext)
    if (!ctx) throw new Error("Error")
    return ctx
}

export default useProducts
