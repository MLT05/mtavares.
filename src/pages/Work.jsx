import { Link } from "react-router-dom"
import projectsData from "../data/projectsData"

function Work() {
    return (
        <main className="work-page">
            <div className="container">
                <h1 className="about-label">Work</h1>

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