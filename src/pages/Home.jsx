import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import projectsData from "../data/projectsData"

function Home() {
    const recentProjects = projectsData.slice(0, 3)

    return (
        <main>
            <Hero />

            <section className="featured-work">
                <div className="container">
                    <div className="section-top scroll-reveal scroll-reveal-delay-1">
                        <h2 className="about-hero-title">Alguns dos meus projetos.</h2>
                    </div>

                    <div className="home-work-grid">
                        {recentProjects.map((project, index) => (
                            <Link
                                to={`/work/${project.slug}`}
                                className={`home-work-card-link scroll-reveal scroll-reveal-delay-${(index % 3) + 1}`}
                                key={project.slug}
                            >
                                <article className="home-work-card">
                                    <div className="home-work-image">
                                        <img
                                            src={project.image}
                                            alt={`Preview do projeto ${project.title}`}
                                        />
                                    </div>

                                    <div className="home-work-content">
                                        <span className="home-work-meta">{project.meta}</span>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    <Link
                        to="/work"
                        className="home-work-more-button scroll-reveal scroll-reveal-delay-2"
                    >
                        Ver mais
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Home