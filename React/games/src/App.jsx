import "./App.css"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import ProviderCharacters from "./context/ProviderCharacters"
import ProviderGames from "./context/ProviderGames"
import Paths from "./routes/Paths"

function App() {
    return (
        <>
            <Header></Header>
            <ProviderGames>
                <ProviderCharacters>
                    <Paths></Paths>
                </ProviderCharacters>
            </ProviderGames>
            <Footer></Footer>
        </>
    )
}

export default App
