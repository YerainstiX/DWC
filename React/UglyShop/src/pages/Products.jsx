import React, { useEffect } from "react"
import "./Products.css"
import useProducts from "../hooks/useProducts"
const Products = () => {
    const { products, getProducts, getSortedProductsByField, error, loading } =
        useProducts()

    

    return <>
    {loading ? <h1>Loading...</h1> : !products ? <h1>Empty</h1> : <div></div>}
        
        </>
}

export default Products
