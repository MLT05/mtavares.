import { Link } from "react-router-dom"
import projectsData from "../data/projectsData"

function Work() {
    return (
        <main className="work-page">
            <section className="container about-hero scroll-reveal scroll-reveal-delay-1">
                <div className="about-hero-inner">
                    <div className="about-hero-text">
                        <p className="about-label">projetos.</p>
                        <h2 className="about-hero-title">
                            Os meus projetos.
                        </h2>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="work-showcase-grid">
                    {projectsData.map((project, index) => (
                        <Link
                            to={`/work/${project.slug}`}
                            className={`work-showcase-link scroll-reveal scroll-reveal-delay-${(index % 3) + 1}`}
                            key={project.slug}
                        >
                            <article className="work-showcase-card">
                                <div className="work-showcase-media">
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