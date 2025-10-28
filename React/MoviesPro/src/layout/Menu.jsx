import React from "react"
import { Link } from "react-router-dom"
import "./Menu.css"
//The menu component to navigate the application
const Menu = () => {
    return (
        <>
            <nav>
                <Link to="/">
                    <h1>Movies for not handsome people</h1>
                </Link>
                <div className="menu">
                    <Link className="menu_element" to="/">
                        Start
                    </Link>
                    <Link className="menu_element" to="/movies">
                        Movies
                    </Link>
                    <Link className="menu_element" to="/actors">
                        Actors
                    </Link>
                    <Link className="menu element" to="/gallery">
                        Gallery
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
