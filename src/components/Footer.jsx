function Footer() {
    return (
        <footer className="site-footer">
            <div className="container site-footer-inner">
                <div className="site-footer-left">
                    <p className="site-footer-signature">
                        <span className="site-footer-note">Designed and built by</span>
                    </p>

                    <span className="site-footer-logo">mtavares.</span>
                </div>

                <div className="site-footer-center">
                    <small className="site-footer-copy">© 2026 Mariana Tavares</small>
                </div>

                <div className="site-footer-right">
                    <a
                        href="mailto:marianalopestavares18@gmail.com"
                        className="footer-social"
                        aria-label="Send an email to Mariana Tavares"
                    >
                        E-mail
                    </a>

                    <a
                        href="https://www.linkedin.com/in/marianaltavares/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social"
                        aria-label="Visit Mariana Tavares LinkedIn profile"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/MLT05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social"
                        aria-label="Visit Mariana Tavares GitHub profile"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer