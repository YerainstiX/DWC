import React from "react"
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/games">GAMES</Link></li>
                <li><Link to="/games/add">ADD GAME</Link></li>
            </ul>
        </div>
    )
}

export default Menu
