import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Menu.css"
import useSession from "../../hooks/useSession"
//The menu component to navigate the application.
const Menu = ({ pageName }) => {
    const { singed, signOut, sessionData, isAdmin } = useSession()

    const [showConfirm, setShowConfirm] = useState(false)

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
                        <>
                            <Link className="menu_element" to="/login">
                                Login
                            </Link>
                            <Link className="menu_element" to="/register">
                                Register
                            </Link>
                        </>
                    )}
                    <Link className="menu_element" to="/products">
                        Products
                    </Link>
                    {singed && isAdmin && (
                        <Link className="menu_element" to="/roles/admin">
                            Roles
                        </Link>
                    )}
                    {singed && (
                        <>
                            <button
                                className="menu_logout"
                                onClick={() => setShowConfirm(true)}
                            >
                                Sing Out
                            </button>
                        </>
                    )}

                    {showConfirm && (
                        <>
                            <div className="menu_confirm_overlay"></div>
                            <div className="menu_confirm">
                                <h1>Sing Out?</h1>
                                <div className="menu_confirm_btn">
                                    <button
                                        onClick={() => {
                                            signOut()
                                            setShowConfirm(false)
                                        }}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => setShowConfirm(false)}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                    {!singed ? (
                        <button className="menu_guest">Guest</button>
                    ) : (
                        <Link className="menu_element" to="/user/profile">
                            <button className="menu_sessionStarted">
                                {sessionData.user.user_metadata.display_name}
                            </button>
                        </Link>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Menu
