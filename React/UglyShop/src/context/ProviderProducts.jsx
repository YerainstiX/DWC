import React, { createContext, useState, useEffect } from "react"
import useSupaBase from "../hooks/useSupaBase"

const ProductsContext = createContext()

const ProviderProducts = ({ children }) => {
    const { getData, getSortedData, loading, error } = useSupaBase()
    const TABLE = "products"
    const [products, setProducts] = useState([])

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

    const box = {
        products,
        getProducts,
        getSortedProductsByField,
        loading,
        error,
    }

    return (
        <ProductsContext.Provider value={box}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProviderProducts

export { ProductsContext }
