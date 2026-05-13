import hortarandaScreen1 from "../../assets/HORTARANDA/hortarandaicon.png"

import carlosImg from "../../assets/HORTARANDA/hortarandaicon.png"
import franciscoImg from "../../assets/HORTARANDA/hortarandaicon.png"
import marianaImg from "../../assets/HORTARANDA/hortarandaicon.png"
import mariaImg from "../../assets/HORTARANDA/hortarandaicon.png"
import { FiGithub } from "react-icons/fi"

function Hortaranda() {
    const projectMeta = [
        { id: "year", label: "Ano", value: "2024" },
        { id: "role", label: "O Meu Papel", value: "UX/UI Design · Desenvolvimento Front-End" },
        { id: "team", label: "Equipa", value: "4 elementos" },
    ]

    const teamMembers = [
        { id: "francisco", name: "Francisco Seabra", image: franciscoImg },
        { id: "carlos", name: "Carlos Teixeira", image: carlosImg },
        { id: "mariana", name: "Mariana Tavares", image: marianaImg },
        { id: "maria", name: "Maria Rodrigues", image: mariaImg },
    ]

    const caseSections = [
        {
            id: "contexto",
            title: "O Contexto.",
            text: (
                <>
                    No âmbito da unidade curricular de Laboratório Multimédia 3, desenvolvemos o <strong>HORTARANDA</strong> como resposta à necessidade de promover a <strong>auto-sustentabilidade alimentar em contextos urbanos</strong>. O projeto foi pensado para pessoas que vivem em apartamentos e dispõem de pouco espaço exterior, como varandas, incentivando práticas mais sustentáveis e conscientes no dia a dia.
                </>
            ),
        },
        {
            id: "objetivo",
            title: "O Objetivo.",
            text: (
                <>
                    O principal objetivo foi criar um <strong>website que permitisse aos utilizadores planear e construir hortas em espaços pequenos</strong>. Procurámos desenvolver uma solução acessível, intuitiva e educativa, capaz de ajudar na organização do cultivo doméstico, promover a produção alimentar em casa e reforçar hábitos alinhados com o <strong>Objetivo de Desenvolvimento Sustentável número 12</strong>.
                </>
            ),
        },
        {
            id: "processo",
            title: "O Processo.",
            text: (
                <>
                    O projeto passou por duas fases principais: <strong>prototipagem e implementação</strong>. Após a definição do conceito, dos layouts e dos requisitos funcionais, desenvolvemos o website com <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>. A solução integrou um <strong>formulário inicial, simulador interativo, perfil com progresso ecológico, calendário de plantação e receitas sazonais</strong>. Ao longo do processo, utilizámos também ferramentas como <strong>ChatGPT</strong>, <strong>Copilot</strong>, <strong>W3Schools</strong>, <strong>YouTube</strong> e <strong>Bootstrap</strong> como apoio técnico à aprendizagem e desenvolvimento.
                </>
            ),
        },
        {
            id: "resultado",
            title: "O Resultado.",
            text: (
                <>
                    O resultado final foi um <strong>website funcional e interativo</strong> que permite ao utilizador planear uma horta personalizada para a sua varanda, acompanhar práticas sustentáveis e explorar sugestões úteis ao longo do ano. Para além da solução técnica, o projeto reforçou competências em <strong>UX/UI, desenvolvimento front-end e criação de experiências digitais orientadas para impacto social e ambiental</strong>.
                </>
            ),
        },
    ]

    return (
        <main className="project-page hortaranda-page">
            <section className="container project-hero scroll-reveal scroll-reveal-delay-1">
                <div className="project-hero-inner">
                    <div className="project-hero-copy">
                        <p className="about-label">
                            Projeto Académico · UX/UI Designer & Developer · 2024
                        </p>

                        <div className="project-title-row">
                            <h1 className="project-title">HORTARANDA</h1>

                            <div className="nabu-page project-social-footer-links">
                                <a
                                    href="https://github.com/CarlT09/Hortaranda"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-social-footer-link"
                                    aria-label="GitHub do HORTARANDA"
                                    title="GitHub do HORTARANDA"
                                >
                                    <FiGithub />
                                </a>
                            </div>
                        </div>

                        <p className="project-description">
                            Website interativo para planear hortas em varandas e promover
                            práticas de auto-sustentabilidade alimentar em ambientes urbanos.
                        </p>
                    </div>

                    <div className="project-hero-image-card">
                        <img
                            src={hortarandaScreen1}
                            alt="Mockup do projeto HORTARANDA"
                            className="project-hero-image"
                        />
                    </div>
                </div>

                <div className="project-meta-grid scroll-reveal scroll-reveal-delay-2">
                    {projectMeta.map((item) => (
                        <div className="project-meta-item" key={item.id}>
                            <span>{item.label}</span>
                            <strong>{item.value}</strong>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container project-text-section">
                {caseSections.map((section, index) => (
                    <div
                        key={section.id}
                        className={`scroll-reveal scroll-reveal-delay-${(index % 3) + 1}`}
                    >
                        <article className="project-text-row">
                            <div className="project-text-title">
                                <h2>{section.title}</h2>
                            </div>

                            <div className="project-text-content">
                                <p className="project-description">{section.text}</p>
                            </div>
                        </article>

                        {section.id === "objetivo" && (
                            <article className="project-inline-image-row scroll-reveal scroll-reveal-delay-2">
                                <figure className="project-video-figure">
                                    <div className="project-video-wrapper">
                                        <iframe
                                            src="https://www.youtube.com/embed/HweAWCn41hI"
                                            title="Vídeo promocional do HORTARANDA"
                                            className="project-video-embed"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                            allowFullScreen
                                        />
                                    </div>
                                </figure>
                            </article>
                        )}
                    </div>
                ))}
            </section>

            <section className="container project-figma-section scroll-reveal scroll-reveal-delay-2">
                <div className="section-top">
                    <p className="section-tag">Layout em Figma</p>
                </div>

                <div className="project-figma-embed">
                    <iframe
                        title="Layout HORTARANDA no Figma"
                        src="https://embed.figma.com/design/mJ4YNPpmwf06z7dX3NRgkm/Hortaranda?node-id=2-228&m=dev&embed-host=share"
                        className="project-figma-iframe"
                        allowFullScreen
                    />
                </div>
            </section>

            <section className="container project-team-section scroll-reveal scroll-reveal-delay-2">
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
        </main>
    )
}

export default Hortaranda