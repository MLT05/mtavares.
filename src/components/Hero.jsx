import fotohome from "../assets/FOTOGRAFIAS MINHAS/IMG_5872.JPG"
import photo2 from "../assets/FOTOGRAFIAS MINHAS/MARIANA_PORTO.jpeg"
import photo3 from "../assets/FOTOGRAFIAS MINHAS/MARIANA_UNI.JPG"
import photo4 from "../assets/FOTOGRAFIAS MINHAS/IMG_0500.jpeg"
import photo5 from "../assets/FOTOGRAFIAS MINHAS/IMG_1449.jpeg"


function Hero() {
    return (
        <section className="container about-hero">
            <div className="about-hero-inner">
                <div className="about-hero-text">
                    <h1 className="about-hero-title">
                        mtavares.
                    </h1>

                    <p className="about-hero-body">
                        I’m a multimedia designer focused on UI/UX and web design,
                        interested in creating digital experiences that feel clear,
                        organized and human. I care about structure, small decisions and
                        how people actually move through an interface.
                    </p>
                </div>

                <div className="about-hero-photos about-hero-mosaic">
                    <div className="about-mosaic-item about-mosaic-1">
                        <img src={fotohome} alt="Mariana smiling" />
                    </div>

                    <div className="about-mosaic-item about-mosaic-2">
                        <img src={photo2} alt="Mariana photo 2" />
                    </div>

                    <div className="about-mosaic-item about-mosaic-3">
                        <img src={photo3} alt="Mariana photo 3" />
                    </div>

                    <div className="about-mosaic-item about-mosaic-4">
                        <img src={photo4} alt="Mariana photo 4" />
                    </div>

                    <div className="about-mosaic-item about-mosaic-5">
                        <img src={photo5} alt="Mariana photo 5" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero