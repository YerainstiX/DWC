import { useState } from "react"
import "./App.css"
import Header from "./components/layout/Header"
import Paths from "./routes/Paths"
import Footer from "./components/layout/Footer"

function App() {
    return (
        <>
            <Header></Header>
            <Paths></Paths>
            <Footer></Footer>
        </>
    )
}

export default App
