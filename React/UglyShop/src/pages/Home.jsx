import React from "react"
import "./Home.css"
import useSession from "../hooks/useSession"
const Home = () => {
    const { singed, sessionData } = useSession()
    return (
        <div className="start_container">
            <h1>Ugly Home page</h1>
            {singed && (
                <p>Welcome {sessionData.user.user_metadata.display_name}</p>
            )}
        </div>
    )
}

export default Home
