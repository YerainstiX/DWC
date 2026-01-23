import React from "react"
import { Link } from "react-router-dom"
import "./Menu.css"
import useSession from "../../hooks/useSession"
//The menu component to navigate the application
const Menu = ({ pageName }) => {
    const { singed, signOut, sessionData } = useSession()

    return (
        <>
            <nav>
                <Link to="/">
                    <h1>{pageName}</h1>
                </Link>
                <div className="menu">
                    <Link className="menu_element" to="/">
                        Home
                    </Link>
                    {!singed && (
                        <Link className="menu_element" to="/login">
                            Login
                        </Link>
                    )}
                    {!singed && (
                        <Link className="menu_element" to="/register">
                            Register
                        </Link>
                    )}
                    {singed && (
                        <Link className="menu_element" to="/products">
                            Products
                        </Link>
                    )}
                    {singed && (
                        <button onClick={() => signOut()}>Sing Out</button>
                    )}
                    {!singed ? (
                        <button>Guest</button>
                    ) : (
                        <button>
                            {sessionData.user.user_metadata.display_name}
                        </button>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Menu
