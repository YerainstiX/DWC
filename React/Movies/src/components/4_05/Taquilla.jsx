import React, { useRef } from "react"

const Taquilla = (props) => {

    const refTaquilla = useRef(null)

    const toggleTaquilla = (props) => {
        if (refTaquilla) {
            refTaquilla.current.style.display =
             refTaquilla.current.style.display === "none" ? "flex" : "none"
        }
    }

    return (
        <>
            <div className="taquilla_container">
                <button onClick={toggleTaquilla}>Taquilla</button>
                <div ref={refTaquilla} className="taquilla_oculto" style={{display: "none"}}>
                    <p>{props.childrenB}</p>
                </div>
            </div>
        </>
    )
}

export default Taquilla
