import React from "react"
import movies from "../assets/movies.json"
import MenuGallery from "../layout/submenu/MenuGallery.jsx"
import { Outlet } from "react-router-dom"
import "./Gallery.css"

//The view of gallery where I show all the images
const Gallery = () => {
    const mov = movies.movies

    const images = mov.flatMap((movie) => movie.image)
    return (
        <>
            <div className="gallery_layout">
                <aside className="gallery_aside">
                    <MenuGallery></MenuGallery>
                </aside>
                <Outlet></Outlet>
                <div className="gallery_container">
                    {images.map((image) => (
                        <img src={image} alt="image" />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Gallery
