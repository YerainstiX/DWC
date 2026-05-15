import "./App.css"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Paths from "./routes/Paths"
import ProviderAnimu from "./context/ProviderAnimu"
import Menu from "./components/layout/Menu"

function App() {
    return (
        <>
            <Menu></Menu>
            <ProviderAnimu>
                <Paths></Paths>
            </ProviderAnimu>
            <Footer></Footer>
        </>
    )
}

export default App
