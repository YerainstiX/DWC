import "./App.css"
import ProviderDiscs from "./context/ProviderDiscs"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Paths from "./routes/Paths"

function App() {
    return (
        <>
            <Header></Header>
            <ProviderDiscs>
                <Paths></Paths>
            </ProviderDiscs>
            <Footer></Footer>
        </>
    )
}

export default App
