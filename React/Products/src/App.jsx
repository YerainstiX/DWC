import { useState } from "react"
import "./App.css"
import Menu from "./components/layout/Menu.jsx"
import Paths from "./routes/Paths"
import Footer from "./components/layout/Footer.jsx"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Menu />
            <Paths />
            <Footer />
        </>
    )
}

export default App
