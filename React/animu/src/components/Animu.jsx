import React, { useState } from "react"
import useAnimu from "../hooks/useAnimu"
import { Link } from "react-router-dom"

const Animu = ({ id, name, studio, image }) => {
    const [confirmDelete, setConfirmDelete] = useState(false)

    const { deleteAnimu, getAnimu } = useAnimu()

    return (
        <>
            <div>
                <h1>{name}</h1>
                <img src={image} alt="img" />
                <h2>{studio}</h2>
                <Link to={`/animus/${id}`}>
                    <button>DETAILS</button>
                </Link>
                <button onClick={() => setConfirmDelete(true)}>DELETE</button>
                <Link to={`/animus/edit/${id}`}>
                    <button>EDIT</button>
                </Link>
                {confirmDelete ? (
                    <>
                        <div>
                            <p>Delete Animu?</p>
                            <button
                                onClick={() => {
                                    deleteAnimu(id)
                                    getAnimu()
                                    setConfirmDelete(false)
                                }}
                            >
                                Confirm
                            </button>
                            <button onClick={() => setConfirmDelete(false)}>Cancel</button>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </>
    )
}

export default Animu
