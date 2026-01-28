import React from "react"

import "./Product.css"

//The individual component to show a product
const Product = ({ name, price, weight, img, description }) => {
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
        </div>
    )
}

export default Product
