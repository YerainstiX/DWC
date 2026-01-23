import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Products from "../pages/Products"
import Error from "../pages/Error"

const Paths = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Error></Error>} />
        </Routes>
    )
}

export default Paths
