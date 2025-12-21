import "./App.css"
import Header from "./components/layout/Header"
import Paths from "./routes/Paths"
import Footer from "./components/layout/Footer"
import ProviderMovies from "./context/ProviderMovies"
import ProviderCharacters from "./context/ProviderCharacters"
import ProviderVehicles from "./context/ProviderVehicles"
import ProviderStarship from "./context/ProviderStarships"

function App() {
    return (
        <>
            <Header />
            <ProviderMovies>
                <ProviderCharacters>
                    <ProviderVehicles>
                        <ProviderStarship>
                            <Paths />
                        </ProviderStarship>
                    </ProviderVehicles>
                </ProviderCharacters>
            </ProviderMovies>
            <Footer />
        </>
    )
}

export default App
