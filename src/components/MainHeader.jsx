import { NavLink } from "react-router-dom"


export default function MainHeader() {
    return (
        <header>
            <nav>
                <NavLink className="navbar-brand" to="/">Bool Movies</NavLink>
            </nav>
        </header>
    )
}