import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import "./Disc.css"
import { ContextDisc } from "../context/ProviderDiscs"

const Disc = ({ id, name, cover, singer, gender }) => {
    const [showConfirm, setShowConfirm] = useState(false)

    const { deleteDisc, getDiscs } = useContext(ContextDisc)

    //Function to delete a disc
    //The sparking bug when confirming delete is in the css I don't know why is happening
    const deleteDiscById = async (id) => {
        await deleteDisc(id)
        await getDiscs()
        setShowConfirm(false)
    }

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
                <Link to={`/disc/edit/${id}`}>
                    <button className="disc_edit">EDIT</button>
                </Link>
                <button
                    className="disc_delete"
                    onClick={() => {
                        setShowConfirm(true)
                    }}
                >
                    Delete
                </button>
                {showConfirm && (
                    <div className="disc_confirmDelete">
                        <h1>Are you sure you want to delete the disc?</h1>
                        <div className="disc_confirmDelete_btn">
                            <button onClick={() => deleteDiscById(id)}>
                                Yes
                            </button>
                            <button onClick={() => setShowConfirm(false)}>
                                No
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Disc
