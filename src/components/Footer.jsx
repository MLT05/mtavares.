function Footer() {
    return (
        <footer className="site-footer">
            <div className="container site-footer-inner">
                <div className="site-footer-left">
                    <p className="site-footer-signature">
                        <span className="site-footer-note">A portfolio (in progress) by</span>
                    </p>

                    <span className="site-footer-logo">mtavares.</span>

                    <p className="site-footer-note">
                        Designed and built by Mariana Tavares.
                    </p>
                </div>

                <div className="site-footer-right">
                    <a
                        href="mailto:marianalopestavares18@gmail.com"
                        className="footer-social"
                        aria-label="Send an email to Mariana Tavares"
                    >
                        <span>E-mail</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/marianaltavares/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social"
                        aria-label="Visit Mariana Tavares LinkedIn profile"
                    >
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/MLT05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social"
                        aria-label="Visit Mariana Tavares GitHub profile"
                    >
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer