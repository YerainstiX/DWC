import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./DiscDetails.css"

const DiscDetails = () => {
    const { id } = useParams()
    const discId = parseInt(id)
    const [disc, setDisc] = useState([])
    useEffect(() => {
        const storedDiscs = JSON.parse(localStorage.getItem("discs")) || []
        setDisc(storedDiscs.find((disc) => disc.id === id))
    }, [id])

    return (
        <div className="discDetails_container">
            <img src={disc.cover} alt={disc.cover} />
            <p>Name: {disc.name}</p>
            <p>Singer/Group: {disc.singer}</p>
            <p>Year: {disc.year}</p>
            <p>Gender: {disc.gender}</p>
            <p>Localization: {disc.localization}</p>
            <p>Borrowed: {disc.borrowed === "true" ? "Yes" : "No"}</p>
        </div>
    )
}

export default DiscDetails
