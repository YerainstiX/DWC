import React from "react"
import { useNavigate } from "react-router-dom"
import "./ButtonNavigate.css"
//Button to return to the start page
const ButtonNavigate = () => {
    const start = useNavigate()
    return (
        <>
            <button
                className="ButtonNavigate_button"
                onClick={() => {
                    start("/")
                }}
            >
                Start Page
            </button>
        </>
    )
}

export default ButtonNavigate
