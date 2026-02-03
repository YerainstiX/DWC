import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Product.css"
import useProducts from "../hooks/useProducts"
import useSession from "../hooks/useSession"

//The individual component to show a product
const Product = ({ id, name, price, weight, img, description }) => {
    const { destroyProduct } = useProducts()
    const { singed } = useSession()
    const [showConfirm, setShowConfirm] = useState(false)

    return (
        <div className="productContainer">
            <img src={img} alt="product" className="product_img" />
            <h1 className="product_name">{name}</h1>
            <div className="product_info">
                <p className="product_characteristics">
                    Price: {price.toString().replace(".", ",")}€ | Weight:{" "}
                    {weight.toString().replace(".", ",")}Kg
                </p>
                <p className="product_description">{description}</p>
            </div>
            {singed && (
                <div className="product_options">
                    <button
                        onClick={() => {
                            setShowConfirm(true)
                        }}
                    >
                        DELETE
                    </button>
                    <Link to={`/products/edit/${id}`}>
                        <button>EDIT</button>
                    </Link>
                </div>
            )}
            {showConfirm && (
                <div className="product_confirmDelete">
                    <h1>Are you sure you want to delete the product?</h1>
                    <div className="product_confirmDelete_btn">
                        <button onClick={() => destroyProduct(id)}>Yes</button>
                        <button onClick={() => setShowConfirm(false)}>
                            No
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Product
