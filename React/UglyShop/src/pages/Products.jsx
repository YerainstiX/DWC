import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { changeFormat } from "../lib/utils"
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
    //This state is to add products to the list directly from the products page
    const [editingList, setEditingList] = useState(false)

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
                        <div className="products_actions">
                            <button className="products_btn">
                                <Link to="/products/add">Add Product +</Link>
                            </button>
                            <Filters
                                filteredProducts={filteredProducts}
                                setFilteredProducts={setFilteredProducts}
                                products={products}
                            ></Filters>
                            <img
                                className="products_btn_img"
                                src="https://cdn-icons-png.freepik.com/512/107/107831.png"
                                alt="img"
                                onClick={() =>
                                    showList
                                        ? setShowList(false)
                                        : setShowList(true)
                                }
                            />{" "}
                            LISTS
                        </div>
                    ) : (
                        <h1 className="products_session">
                            Log in to use the filters and add products
                        </h1>
                    )}
                    <div
                        className="products_main"
                        style={{
                            gridTemplateColumns: showList ? "3fr 2fr" : "1fr",
                        }}
                    >
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
                                        editingList={editingList}
                                    ></Product>
                                ))
                            ) : (
                                <h1 className="products_error">EMPTY</h1>
                            )}
                        </div>
                        {singed && showList && (
                            <div className="products_lists">
                                <ShoppingLists
                                    setEditingList={setEditingList}
                                    editingList={editingList}
                                ></ShoppingLists>
                            </div>
                        )}
                    </div>
                </>
            )}
            <div className="products_info">
                Products: {filteredProducts.length} | Average price:{" "}
                {changeFormat(averagePrice)}€
            </div>
        </div>
    )
}

export default Products
