import { useContext, useEffect, useState } from "react"
import { SupaBaseContext } from "../context/ProviderSupaBase"

const useProducts = () => {
    const TABLE = "products"
    const [products, setProducts] = useState([])
    const { getData, getSortedData, loading, error } =
        useContext(SupaBaseContext)

    const getProducts = async () => {
        const products = await getData(TABLE)
        setProducts(products)
    }

    const getSortedProductsByField = async (column, ascending = true) => {
        const products = await getSortedData(TABLE, { column, ascending })
        setProducts(products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return { products, getProducts, getSortedProductsByField, loading, error }
}

export default useProducts
