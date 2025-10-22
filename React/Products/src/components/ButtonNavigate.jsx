import React from "react"
import { useNavigate } from "react-router-dom"
import "./ButtonNavigate.css"

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
