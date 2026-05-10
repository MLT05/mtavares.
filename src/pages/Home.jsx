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
                        <p className="section-tag">Work</p>
                        <Link to="/work" className="section-link">See all</Link>
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
                                        <h2>{project.title}</h2>
                                        <p>{project.description}</p>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Home