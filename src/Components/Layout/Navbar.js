import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    const navigate = useNavigate();
    const path = window.location.pathname
    return (
        <nav className="nav">
            <img src="logo.png" />
            &nbsp;
            &nbsp;
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>

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

