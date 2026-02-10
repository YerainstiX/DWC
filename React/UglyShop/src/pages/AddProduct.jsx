import React, { useState } from "react"
import useProducts from "../hooks/useProducts"
import { validateProductForm } from "../lib/validations"
import { saveProduct } from "../lib/utils"
import { useNavigate } from "react-router-dom"

import "./AddProduct.css"

//The component that handles all the logic to add a new product
const AddProduct = () => {
    const { insertProduct } = useProducts()

    const [errors, setErrors] = useState({
        name: "",
        weight: "",
        price: "",
        status: "",
    })

    const [formData, setFormData] = useState({
        name: "",
        weight: "",
        price: "",
        image_url: "",
        description: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { newErrors, valid } = validateProductForm(formData)
        if (!valid) {
            setErrors(newErrors)
            setErrors((previous) => ({
                ...previous,
                status: "Cannot add disc, fix the errors above",
            }))
            return
        }

        const newProduct = saveProduct(formData)
        insertProduct(newProduct)
        setErrors({
            name: "",
            weight: "",
            price: "",
            status: "",
        })
        setFormData({
            name: "",
            weight: "",
            price: "",
            image_url: "",
            description: "",
        })
        setErrors((previous) => ({
            ...previous,
            status: "Product added successfully!",
        }))

        setTimeout(() => {
            navigate("/products")
        }, 1500)
    }

    return (
        <div className="AddProduct_container">
            <h1 className="AddProduct_container">New Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="AddProduct_username">
                    <input
                        type="text"
                        name="name"
                        placeholder="Macucofero"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <p id="name_error" className="AddProduct_msg_error">
                            {errors.name}
                        </p>
                    )}
                </div>
                <div className="AddProduct_weight">
                    <input
                        type="text"
                        name="weight"
                        placeholder="1"
                        value={formData.weight}
                        onChange={handleChange}
                    />
                    {errors.weight && (
                        <p id="weight_error" className="AddProduct_msg_error">
                            {errors.weight}
                        </p>
                    )}
                </div>
                <div className="AddProduct_price">
                    <input
                        type="number"
                        name="price"
                        placeholder="0.99"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    {errors.price && (
                        <p id="price_error" className="AddProduct_msg_error">
                            {errors.price}
                        </p>
                    )}
                </div>
                <div className="AddProduct_img">
                    <input
                        type="text"
                        name="image_url"
                        placeholder="url"
                        value={formData.image_url}
                        onChange={handleChange}
                    />
                </div>
                <div className="AddProduct_description">
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    {errors.description && (
                        <p
                            id="description_error"
                            className="AddProduct_msg_error"
                        >
                            {errors.description}
                        </p>
                    )}
                </div>
                <button className="AddProduct_submit_btn" type="submit">
                    Save Product
                </button>
                {errors.status && (
                    <p id="status_error" className="AddProduct_msg_error">
                        {errors.status}
                    </p>
                )}
            </form>
        </div>
    )
}

export default AddProduct
