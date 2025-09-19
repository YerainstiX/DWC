import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Contenedor from "./components/practica203/Contenedor.jsx"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Contenedor>ESTO ES UN CONTENEDOR</Contenedor>
        </>
    )
}

export default App
