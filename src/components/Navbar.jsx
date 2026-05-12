import { Link } from "react-router-dom"

function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">mtavares.</Link>

                <nav>
                    <ul className="nav-links">
                        <li><Link to="/about">sobre mim.</Link></li>
                        <li><Link to="/work">projetos.</Link></li>
                        <li><Link to="/contact">contactos.</Link></li>
                        <li><Link to="/contact">contactos.</Link></li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar