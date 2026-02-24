import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useProducts from "../hooks/useProducts"
import { validateProductForm } from "../lib/validations"
import { saveProduct } from "../lib/utils"
import "./EditProduct.css"

//The component that handles al the logic to edit a product
const EditProduct = () => {
    const navigate = useNavigate()

    const { id } = useParams()
    const { products, editProduct } = useProducts()
    const [product, setProduct] = useState()

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

    useEffect(() => {
        setProduct(products.find((product) => product.id === id))
    }, [id, products])

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                weight: product.weight,
                price: product.price,
                image_url: product.image_url,
                description: product.description,
            })
        }
    }, [product])

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
                status: "Cannot edit product, fix the errors above",
            }))
            return
        }

        const newProduct = saveProduct(formData)
        editProduct(newProduct, product.id)
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
            status: "Product edited successfully!",
        }))

        setTimeout(() => {
            navigate("/products")
        }, 1500)
    }

    return (
        <div className="EditProduct_container">
            <h1 className="EditProduct_container">Ugly Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="EditProduct_username">
                    <input
                        type="text"
                        name="name"
                        placeholder="Macucofero"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <p id="name_error" className="EditProduct_msg_error">
                            {errors.name}
                        </p>
                    )}
                </div>
                <div className="EditProduct_weight">
                    <input
                        type="text"
                        name="weight"
                        placeholder="1"
                        value={formData.weight}
                        onChange={handleChange}
                    />
                    {errors.weight && (
                        <p id="weight_error" className="EditProduct_msg_error">
                            {errors.weight}
                        </p>
                    )}
                </div>
                <div className="EditProduct_price">
                    <input
                        type="number"
                        name="price"
                        placeholder="0.99"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    {errors.price && (
                        <p id="price_error" className="EditProduct_msg_error">
                            {errors.price}
                        </p>
                    )}
                </div>
                <div className="EditProduct_img">
                    <input
                        type="text"
                        name="image_url"
                        placeholder="url"
                        value={formData.image_url}
                        onChange={handleChange}
                    />
                </div>
                <div className="EditProduct_description">
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    {errors.description && (
                        <p
                            id="description_error"
                            className="EditProduct_msg_error"
                        >
                            {errors.description}
                        </p>
                    )}
                </div>
                <button className="EditProduct_submit_btn" type="submit">
                    Edit Product
                </button>
                {errors.status && (
                    <p id="status_error" className="EditProduct_msg_error">
                        {errors.status}
                    </p>
                )}
            </form>
        </div>
    )
}

export default EditProduct
