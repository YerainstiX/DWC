import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Products from "../pages/Products"
import Error from "../pages/Error"
import AddProduct from "../pages/AddProduct"
import EditProduct from "../pages/EditProduct"
import AdminRoles from "../pages/AdminRoles"

const Paths = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
            <Route path="/roles/admin" element={<AdminRoles />} />
            <Route path="*" element={<Error></Error>} />
        </Routes>
    )
}

export default Paths
