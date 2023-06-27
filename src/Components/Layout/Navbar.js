import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    const path = window.location.pathname
    return (
        <nav className="nav">
            <img src="logo.png" />
            &nbsp;
            &nbsp;
            <ul>
                <Link to="#">Home</Link>
                <customLink to="#">Shop</customLink>
                <customLink to="#">Blogs</customLink>
                <customLink to="#">About</customLink>
                <customLink to="#">Contact</customLink>

            </ul>
            <ul>
                <li>
                    <img src="vector.png" /></li>

                <li className="pink">Login/Register </li>
                <li>
                    <img src="vector1.png " />
                </li>
                <li>
                    <img src="vector2.png " />
                </li>
                <li className="no1">1</li>
                <li><img src="vector3.png" /></li>
                <li className="no2">2</li>

            </ul>

        </nav>
    )
}

