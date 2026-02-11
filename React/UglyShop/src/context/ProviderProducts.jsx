import React, { createContext, useState, useEffect } from "react"
import useSupaBase from "../hooks/useSupaBase"

const ProductsContext = createContext()

const ProviderProducts = ({ children }) => {
    const {
        getData,
        getSortedData,
        insertIntoTable,
        editTable,
        destroyTable,
        loading,
        error,
    } = useSupaBase()

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

    const insertProduct = async (data) => {
        const product = await insertIntoTable(TABLE, data)
        if (product) setProducts([...products, product])
    }

    const editProduct = async (data, id) => {
        const updatedProduct = await editTable(TABLE, data, id)

        const newProducts = products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product,
        )
        setProducts(newProducts)
    }

    const destroyProduct = async (id) => {
        const deletedProduct = await destroyTable(TABLE, { id: id })

        const newProducts = products.filter((product) => product.id !== id)

        setProducts(newProducts)
    }

    useEffect(() => {
        getProducts()
    }, [])

    const box = {
        products,
        getProducts,
        getSortedProductsByField,
        insertProduct,
        editProduct,
        destroyProduct,
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
