import React, { useEffect, useState } from "react"
import "./Products.css"
import useProducts from "../hooks/useProducts"
import Product from "../components/Product"

const Products = () => {
    const { products, getProducts, error, loading } = useProducts()

    const [filteredProducts, setFilteredProducts] = useState([])
    const [showFilters, setShowFilters] = useState(false)

    useEffect(() => {
        setFilteredProducts(products)
    }, [products])

    const filterByName = (e) => {
        const text = e.target.value.toLowerCase()

        if (text.trim === "") return setFilteredProducts(products)

        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(text),
        )

        setFilteredProducts(filtered)
    }

    return (
        <div className="product_layout">
            {loading ? (
                <h1>Loading...</h1>
            ) : !products ? (
                <h1>Empty</h1>
            ) : (
                <>
                    <h1 className="products_title">PRODUCTS</h1>
                    <input
                        type="search"
                        placeholder="Search by name"
                        onChange={filterByName}
                    />
                    <button onClick={setShowFilters(true)}>FILTERS</button>
                    {showFilters && (
                        <div className="products_filters">
                            <div className="products_order_name">
                                NAME
                                <button
                                    className="products_order_ascending"
                                    onClick={() => {
                                        filteredProducts.sort((a, b) => {
                                            a.name - b.name
                                        })
                                    }}
                                >
                                    Ascending
                                </button>
                                <button
                                    className="products_order_descending"
                                    onClick={() => {
                                        filteredProducts.sort((a, b) => {
                                            b.name - a.name
                                        })
                                    }}
                                >
                                    Descending
                                </button>
                            </div>
                            <div className="products_order_price">
                                PRICE
                                <button
                                    className="products_order_ascending"
                                    onClick={() => {
                                        filteredProducts.sort((a, b) => {
                                            a.price - b.price
                                        })
                                    }}
                                >
                                    Ascending
                                </button>
                                <button
                                    className="products_order_descending"
                                    onClick={() => {
                                        filteredProducts.sort((a, b) => {
                                            b.price - a.price
                                        })
                                    }}
                                >
                                    Descending
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="products_container">
                        {filteredProducts.map((product) => (
                            <Product
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                weight={product.weight}
                                img={product.image_url}
                                description={product.description}
                            ></Product>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Products
