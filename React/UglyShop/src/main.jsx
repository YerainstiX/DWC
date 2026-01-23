import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import ProviderSession from "./context/ProviderSession.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ProviderSession>
                <App />
            </ProviderSession>
        </BrowserRouter>
    </StrictMode>,
)
