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
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1TTEtog6l6nz2VpIGDJW7kTbDi7EC6-6n/view?usp=sharing"
                                download="Mariana-Tavares-CV.pdf"
                            >
                                o meu cv.
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:marianalopestavares18@gmail.com"
                                className="nav-contact-link"
                            >
                                contactar.
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar