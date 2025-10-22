import React from "react"
import { Routes, Route } from "react-router-dom"
import Start from "../pages/Start.jsx"
import Product from "../pages/Product.jsx"
import About from "../pages/About.jsx"
import Contact from "../pages/Contact.jsx"
import Error from "../pages/Error.jsx"

const Paths = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Start />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<Error></Error>} />
            </Routes>
        </>
    )
}

export default Paths
