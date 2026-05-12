import { Link } from "react-router-dom"
import projectsData from "../data/projectsData"

function Work() {
    return (
        <main className="work-page">
            {/* Secção de Cabeçalho */}
            <section className="container about-hero">
                <div className="about-hero-inner">
                    <div className="about-hero-text">
                        <p className="about-label">projetos.</p>
                        <h2 className="about-hero-title">
                            Os meus projetos.
                        </h2>
                    </div>
                </div>
            </section>

            {/* Grelha de Projetos */}
            <div className="container">
                <div className="work-showcase-grid">
                    {projectsData.map((project) => (
                        <Link
                            to={`/work/${project.slug}`}
                            className="work-showcase-link"
                            key={project.slug}
                        >
                            <article className="work-showcase-card">
                                <div className="work-showcase-media">
                                    {project.isNew && (
                                        <span className="work-showcase-badge">New entry 🔥</span>
                                    )}

                                    <img
                                        src={project.image}
                                        alt={`Preview do projeto ${project.title}`}
                                        loading="lazy"
                                    />
                                </div>

                                <div className="work-showcase-content">
                                    <span className="work-showcase-meta">{project.meta}</span>
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Work