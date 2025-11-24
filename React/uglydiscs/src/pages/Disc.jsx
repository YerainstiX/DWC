import React from "react"
import { Link } from "react-router-dom"
import "./Disc.css"

const Disc = ({ id, name, cover, singer, gender, deleteDisc }) => {
    return (
        <>
            <div className="disc_container">
                <img src={cover} alt="imagen" className="disc_image"></img>
                <p className="disc_name">{name}</p>
                <p className="disc_singer">{singer}</p>
                <p className="disc_gender">{gender}</p>
                <Link to={`/disc/${id}`}>
                    <button className="disc_details">DETAILS</button>
                </Link>
                <button
                    className="disc_delete"
                    onClick={() => {
                        deleteDisc(id) 
                    }}
                >
                    Delete
                </button>
            </div>
        </>
    )
}

export default Disc
