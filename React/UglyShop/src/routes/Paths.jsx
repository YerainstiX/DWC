import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import LoginRegister from "../pages/LoginRegister"
import Products from "../pages/Products"
import Error from "../pages/Error"

const Paths = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/register" element={<LoginRegister />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Error></Error>} />
        </Routes>
    )
}

export default Paths
