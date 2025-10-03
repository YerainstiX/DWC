import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Listado from "./components/Listado.jsx"
import ContadorLimite from "./components/ContadorLimite.jsx"
import ContadorLikes from "./components/ContadorLikes.jsx"
import Contenedor from "./components/Contenedor.jsx"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Contenedor>
                <Listado />
                <ContadorLimite />
                <ContadorLikes />
            </Contenedor>
        </>
    )
}

export default App
