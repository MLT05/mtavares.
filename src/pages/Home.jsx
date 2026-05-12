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
                    <div className="section-top">
                        <h2 className="about-hero-title">Alguns dos meus projetos.</h2>
                    </div>

                    <div className="home-work-grid">
                    {recentProjects.map((project) => (
                            <Link
                                to={`/work/${project.slug}`}
                                className="home-work-card-link"
                                key={project.slug}
                            >
                                <article className="home-work-card">
                                    <div className="home-work-image">
                                        {project.isNew && (
                                            <span className="home-work-badge">New entry 🔥</span>
                                        )}

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
                    <Link to="/work" className="home-work-more-button">
                        Ver mais
                    </Link>
                </div>

            </section>


        </main>
    )
}

export default Home