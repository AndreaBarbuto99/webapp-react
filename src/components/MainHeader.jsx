import { NavLink } from "react-router-dom"


export default function MainHeader() {
    return (
        <header className="border border-primary bg-body-secondary">
            <nav>
                <NavLink className="navbar-brand" to="/">Bool Movies</NavLink>
            </nav>
        </header>
    )
}