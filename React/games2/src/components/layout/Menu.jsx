import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/games">GAMES</Link>
            </li>
        </ul>
    )
}

export default Menu
