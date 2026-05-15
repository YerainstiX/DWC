import React from "react"
import { Link } from "react-router-dom"
const Menu = () => {
    return (
        <>
            <h1>ANIMUS</h1>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/animus">Animus</Link>
                </li>
            </ul>
        </>
    )
}

export default Menu
