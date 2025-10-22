import { useState } from "react"
import "./App.css"
import Menu from "./components/layout/Menu.jsx"
import Paths from "./routes/Paths"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Menu />
            <Paths />
        </>
    )
}

export default App
