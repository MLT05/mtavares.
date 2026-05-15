import { Link } from "react-router-dom"
import projectsData from "../data/projectsData"

function WorkCards() {
    return (
        <section className="featured-work">
            <div className="container">
                <div className="home-work-grid">
                    {projectsData.map((project) => (
                        <Link
                            key={project.slug}
                            to={`/work/${project.slug}`}
                            className="work-card"
                        >
                            <div className="work-card-image-wrap">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="work-card-image"
                                />
                            </div>

                            <div className="work-card-content">
                                <p className="work-card-meta">{project.meta}</p>
                                <h2>{project.title}</h2>
                                <p className="work-card-description">{project.description}</p>

                                {project.tags && (
                                    <div className="project-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="project-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkCards