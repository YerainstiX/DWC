import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "./Products.css"
import useProducts from "../hooks/useProducts"
import Product from "../components/Product"
import Filters from "../components/Filters"
import useSession from "../hooks/useSession"
import ShoppingLists from "../components/ShoppingLists"

//The page that shows all the products in the store and the filters for them
const Products = () => {
    const { products, loading } = useProducts()
    const { singed } = useSession()

    const [showList, setShowList] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        setFilteredProducts(products)
    }, [products])

    const averagePrice =
        filteredProducts.reduce((sum, p) => sum + p.price, 0) /
        (filteredProducts.length || 1)

    return (
        <div className="product_layout">
            {loading ? (
                <h1 className="products_loading">Loading...</h1>
            ) : !products ? (
                <h1 className="products_error">Empty</h1>
            ) : (
                <>
                    <h1 className="products_title">PRODUCTS</h1>
                    {singed ? (
                        <>
                            <button className="products_btn">
                                <Link to="/products/add">Add Product +</Link>
                            </button>
                            <Filters
                                filteredProducts={filteredProducts}
                                setFilteredProducts={setFilteredProducts}
                                products={products}
                            ></Filters>
                            <ShoppingLists></ShoppingLists>
                        </>
                    ) : (
                        <h1 className="products_session">
                            Log in to use the filters and add products
                        </h1>
                    )}
                    <div className="products_container">
                        {filteredProducts.length !== 0 ? (
                            filteredProducts.map((product) => (
                                <Product
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    weight={product.weight}
                                    img={product.image_url}
                                    description={product.description}
                                ></Product>
                            ))
                        ) : (
                            <h1 className="products_error">EMPTY</h1>
                        )}
                    </div>
                </>
            )}
            <div className="products_info">
                Products: {filteredProducts.length} | Average price:{" "}
                {averagePrice.toFixed(2)}€
            </div>
        </div>
    )
}

export default Products
