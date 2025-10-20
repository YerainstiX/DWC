import React, { useRef } from "react"
import Interprete from "../2_03/Interprete"

const ListaInterpretes = ({ interpretes }) => {
    const contenedorRef = useRef(null)

    const toggleInterpretes = () => {
        if (contenedorRef.current) {
            contenedorRef.current.style.display =
                contenedorRef.current.style.display === "none" ? "flex" : "none"
        }
    }

    return (
        <div className="ListaInterprete_container">
            <button onClick={toggleInterpretes}>Intérpretes</button>
            <div
                ref={contenedorRef}
                className="ListaInterprete_oculto"
                style={{ display: "none" }}
            >
                {interpretes.map((int, index) => (
                    <Interprete key={index} nombre={int.nombre} foto={int.foto}>
                        {int.descripcion}
                    </Interprete>
                ))}
            </div>
        </div>
    )
}

export default ListaInterpretes
