import retexLogo from "../../assets/RETEX/RETEX_LOGO.svg"
import retexScreen from "../../assets/RETEX/retex-phones.svg"
import marianaImg from "../../assets/RETEX/RETEX_LOGO.svg"

import { FiInstagram, FiLinkedin } from "react-icons/fi"

function Retex() {
    const projectMeta = [
        { id: "year", label: "Ano", value: "2025" },
        { id: "role", label: "O Meu Papel", value: "UX/UI Design · Gestão de Redes Sociais" },
        { id: "team", label: "Equipa", value: "4 elementos" },
    ]

    const teamMembers = [
        { id: "mariana", name: "Mariana Tavares", image: marianaImg },
        { id: "maria", name: "Maria Leonor Frias", image: marianaImg },
        { id: "guilherme", name: "Guilherme Baptista", image: marianaImg },
        { id: "hugo", name: "Hugo Humberto", image: marianaImg },
    ]

    const caseSections = [
        {
            id: "contexto",
            title: "O Contexto.",
            text: "A RETEX Portugal é uma empresa focada na recolha, reutilização e valorização sustentável de têxteis usados, promovendo a economia circular. A minha colaboração surgiu no contexto de um bootcamp, num momento em que a marca procurava melhorar a sua presença digital e repensar a experiência da sua plataforma.",
        },
        {
            id: "objetivo",
            title: "O Objetivo.",
            text: "O principal objetivo foi redesenhar a interface da plataforma, tornando-a mais intuitiva, clara e visualmente consistente com a identidade da marca. Em paralelo, passei também a contribuir para a gestão e criação de conteúdos para as redes sociais da RETEX, reforçando a sua comunicação digital.",
        },
        {
            id: "processo",
            title: "O Processo.",
            text: "O trabalho começou com a análise da interface existente e com a identificação de aspetos a melhorar ao nível da usabilidade, da hierarquia visual e da organização da informação. A partir dessa análise, foi desenvolvida uma nova proposta de interface para a plataforma. Numa fase posterior, acompanhei também a gestão das redes sociais, participando na criação de conteúdos e no desenvolvimento de uma comunicação visual mais consistente para a marca.",
        },
        {
            id: "estado",
            title: "O Estado Atual.",
            text: (
                <>
                    O redesign da interface encontra-se atualmente <strong>em fase de implementação</strong>, pelo que a versão final da plataforma ainda não pode ser apresentada. Já o trabalho desenvolvido nas redes sociais permitiu criar conteúdos mais consistentes, reforçar a identidade visual da marca e consolidar a sua presença digital.
                </>
            ),
        },
    ]

    return (
        <main className="project-page">
            <section className="container project-hero">
                <div className="project-hero-inner">
                    <div className="project-hero-copy">
                        <p className="about-label">
                            Colaboração · UX/UI Design | Gestão de Redes Sociais · 2025
                        </p>

                        <h1 className="project-title">RETEX Portugal</h1>

                        <p className="project-description">
                            Plataforma que revoluciona a forma como lidamos com o desperdício têxtil. Tornamos a reutilização de têxtil mais simples, conveniente e eficiente, através de um modelo de recolha inovador e um compromisso real com a economia circular.                        </p>
                    </div>

                    <div className="project-hero-image-card">
                        <img
                            src={retexLogo}
                            alt="Logótipo da RETEX Portugal"
                            className="project-hero-image"
                        />
                    </div>
                </div>

                <div className="project-meta-grid">
                    {projectMeta.map((item) => (
                        <div className="project-meta-item" key={item.id}>
                            <span>{item.label}</span>
                            <strong>{item.value}</strong>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container project-text-section">
                {caseSections.map((section) => (
                    <div key={section.id}>
                        <article className="project-text-row">
                            <div className="project-text-title">
                                <h2>{section.title}</h2>
                            </div>

                            <div className="project-text-content">
                                <p className="project-description">{section.text}</p>
                            </div>
                        </article>

                        {section.id === "objetivo" && (
                            <article className="project-inline-image-row">
                                <img
                                    src={retexScreen}
                                    alt="Proposta de interface desenvolvida para a RETEX"
                                    className="project-inline-image bo"
                                />
                            </article>
                        )}
                    </div>
                ))}
            </section>

            <section className="container project-team-section">
                <div className="section-top">
                    <p className="section-tag">Equipa</p>
                </div>

                <div className="project-team-grid">
                    {teamMembers.map((member) => (
                        <div className="project-team-member" key={member.id}>
                            <div className="project-team-circle">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="project-team-photo"
                                />
                            </div>
                            <p className="project-team-name">{member.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container project-social-footer">
                <p className="section-tag">Redes Sociais da Marca</p>

                <div className="project-social-footer-links">
                    <a
                        href="https://www.instagram.com/retexportugal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-social-footer-link"
                        aria-label="Instagram da RETEX"
                    >
                        <FiInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/retex-portugal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-social-footer-link"
                        aria-label="LinkedIn da RETEX"
                    >
                        <FiLinkedin />
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Retex