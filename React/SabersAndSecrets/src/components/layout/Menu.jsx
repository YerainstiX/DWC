import React from "react"
import { Link } from "react-router-dom"
import "./Menu.css"
//The menu component to navigate the application
const Menu = ({ pageName }) => {
    return (
        <>
            <nav>
                <Link to="/">
                    <h1>{pageName}</h1>
                </Link>
                <div className="menu">
                    <Link className="menu_element" to="/">
                        Home
                    </Link>
                    <Link className="menu_element" to="/movies">
                        Movies
                    </Link>
                    <Link className="menu_element" to="/about">
                        About
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Menu
