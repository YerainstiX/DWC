import React from "react"
import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return (
        <>
            <nav>
                <Link to="/">
                    <h1>Productos para Feardos</h1>
                </Link>
                <div className="menu">
                    <Link className="menu_element" to="/">
                        Start
                    </Link>
                    <Link className="menu_element" to="/product">
                        Product
                    </Link>
                    <Link className="menu_element" to="/about">
                        About
                    </Link>
                    <Link className="menu_element" to="/contact">
                        Contact
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Menu
