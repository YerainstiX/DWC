import { useState } from "react"

import "./App.css"
import Menu from "./layout/Menu.jsx"
import Contenedor from "./layout/Contenedor.jsx"
import Content from "./layout/Content.jsx"
import Footer from "./layout/Footer.jsx"
import Paths from "./routes/Paths.jsx"

function App() {
    return (
        <>
            <Menu />
            <Paths />
            <Footer />
        </>
    )
}

export default App
