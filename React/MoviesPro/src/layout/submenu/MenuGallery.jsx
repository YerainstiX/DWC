import React from "react"
import { Link } from "react-router-dom"
import "./MenuGallery.css"

//The component with the submenu for gallery
const MenuGallery = () => {
    return (
        <>
            <div className="menuGallery_container">
                <Link to="/gallery/title">TITLE</Link>
                <Link to="/gallery/actor">ACTOR</Link>
                <Link to="/gallery/director">DIRECTOR</Link>
            </div>
        </>
    )
}

export default MenuGallery
