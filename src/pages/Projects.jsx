const projects = [
    {
        category: "Frontend Project",
        year: "2026",
        title: "Projeto Um",
        description: "Descrição curta do projeto, o problema e o que construí."
    },
    {
        category: "React App",
        year: "2026",
        title: "Projeto Dois",
        description: "Uma aplicação feita para mostrar componentes, estado e interface."
    },
    {
        category: "Website",
        year: "2026",
        title: "Projeto Três",
        description: "Um site responsivo com foco em design limpo e boa experiência."
    },
    {
        category: "JavaScript",
        year: "2026",
        title: "Projeto Quatro",
        description: "Projeto interativo com lógica, organização e atenção ao detalhe."
    }
]

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="section-heading">
                    <p>Work</p>
                    <h2>Projetos em destaque</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article className="project-card" key={index}>
              <span className="project-meta">
                {project.category} @{project.year}
              </span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects