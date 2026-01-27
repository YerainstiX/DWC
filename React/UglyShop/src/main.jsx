import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import ProviderSession from "./context/ProviderSession.jsx"
import ProviderProducts from "./context/ProviderProducts.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ProviderSession>
                <ProviderProducts>
                    <App />
                </ProviderProducts>
            </ProviderSession>
        </BrowserRouter>
    </StrictMode>,
)
