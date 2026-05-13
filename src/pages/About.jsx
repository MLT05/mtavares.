import foto1 from "../assets/FOTOGRAFIAS MINHAS/IMG_1449.jpeg"
import foto2 from "../assets/FOTOGRAFIAS MINHAS/IMG_0500.jpeg"
import foto3 from "../assets/FOTOGRAFIAS MINHAS/eu_1.jpg"
import foto5 from "../assets/FOTOS_AMAIS/uni.jpeg"
import foto6 from "../assets/FOTOS_AMAIS/d54e4108-becf-4197-a125-ffc9239f6bc6.jpg"
import foto7 from "../assets/FOTOS_AMAIS/amigos_2.jpeg"
import foto8 from "../assets/FOTOS_AMAIS/amigos_3.jpg"
import foto9 from "../assets/FOTOS_AMAIS/aviao.jpeg"
import foto10 from "../assets/FOTOS_AMAIS/cadelinha.jpeg"
import foto11 from "../assets/FOTOGRAFIAS MINHAS/eu_2.jpeg"
import foto12 from "../assets/FOTOGRAFIAS MINHAS/eu_3.jpeg"
import foto13 from "../assets/FOTOS_AMAIS/gatinhos.jpeg"
import foto14 from "../assets/FOTOS_AMAIS/girassol.jpg"
import foto15 from "../assets/Group 24.svg"
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi"

function About() {
    const carouselImages = [
        foto1,
        foto2,
        foto3,
        foto5,
        foto6,
        foto7,
        foto8,
        foto9,
        foto10,
        foto11,
        foto12,
        foto13,
        foto14
    ]

    const goals = [
        {
            id: 1,
            number: "01",
            label: "Trabalho criativo",
            description: "Trabalhar em equipa, partilhar ideias e desenvolver novos projetos."
        },
        {
            id: 2,
            number: "02",
            label: "Aprendizagem contínua",
            description: "Continuar a adquirir conhecimentos nas áreas de UI/UX, web design e design digital."
        },
        {
            id: 3,
            number: "03",
            label: "Bom ambiente",
            description: "Fazer parte de um contexto de trabalho saudável, colaborativo e orientado para o crescimento."
        },
        {
            id: 4,
            number: "04",
            label: "Evolução profissional",
            description: "Construir um percurso sólido e desenvolver projetos cada vez mais consistentes e intencionais."
        }
    ]

    const journeyItems = [
        {
            id: 1,
            number: "01",
            meta: "Colégio de Gaia",
            title: "Administração e Marketing",
            description:
                "Foi aqui que desenvolvi bases ligadas à comunicação, organização, estratégia e visão de negócio, aspetos que hoje também influenciam a forma como penso o design."
        },
        {
            id: 2,
            number: "02",
            meta: "Universidade de Aveiro",
            title: "Licenciatura em Multimédia e Tecnologias da Comunicação",
            description:
                "Na licenciatura, tenho aprofundado competências em design digital, web, comunicação visual e experiência do utilizador, construindo uma prática cada vez mais consistente entre criatividade e estrutura."
        },
        {
            id: 3,
            number: "03",
            meta: "Experiência profissional",
            title: "RETEX Portugal",
            description:
                "Em paralelo com o percurso académico, tenho contacto com contexto profissional real, trabalho em equipa e maior sentido de responsabilidade, o que tem contribuído para o meu crescimento pessoal e profissional."
        }
    ]

    const toolsList = [
        { id: 1, name: "Figma", icon: "figma" },
        { id: 2, name: "Trello", icon: "trello" },
        { id: 3, name: "Jira", icon: "jira" },
        { id: 4, name: "PhpStorm", icon: "phpstorm" },
        { id: 5, name: "React", icon: "react" },
        { id: 6, name: "Firebase", icon: "firebase" },
        { id: 7, name: "Postman", icon: "postman" },
        { id: 8, name: "Google Drive", icon: "googledrive" },
        { id: 9, name: "Google Docs", icon: "googledocs" },
        { id: 10, name: "Google Meet", icon: "googlemeet" },
        { id: 11, name: "Gmail", icon: "gmail" }
    ]

    return (
        <main className="about-page">
            <section className="container about-hero scroll-reveal scroll-reveal-delay-1">
                <div className="about-hero-inner">
                    <div className="about-hero-text">
                        <p className="about-label">Sobre mim</p>

                        <h1 className="about-hero-title">
                            Gosto de criar interfaces <span>claras, organizadas</span> e pensadas ao detalhe.
                        </h1>

                        <p className="about-hero-body">
                            Sou a <strong>Mariana Tavares</strong> e interesso-me por criatividade, inovação e trabalho
                            em equipa, e valorizo a aprendizagem
                            contínua em áreas ligadas ao design e ao digital.
                        </p>

                        <div className="about-social-links" aria-label="Redes sociais">
                            <a
                                href="https://www.instagram.com/click.by.mary_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about-social-link"
                                aria-label="Instagram da Mariana"
                            >
                                <FiInstagram />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/marianaltavares/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about-social-link"
                                aria-label="LinkedIn da Mariana"
                            >
                                <FiLinkedin />
                            </a>

                            <a
                                href="https://github.com/MLT05"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about-social-link"
                                aria-label="GitHub da Mariana"
                            >
                                <FiGithub />
                            </a>
                        </div>

                        <div className="about-hero-tags" aria-label="Informação principal">
                            <span className="about-hero-tag">21 anos</span>
                            <span className="about-hero-tag">Porto</span>
                            <span className="about-hero-tag">Licenciatura em MTC</span>
                            <span className="about-hero-tag">UI/UX</span>
                            <span className="about-hero-tag">Web design</span>
                            <span className="about-hero-tag">Design digital</span>
                        </div>
                    </div>

                    <div className="about-hero-photos scroll-reveal scroll-reveal-delay-2">
                        <div className="about-photo">
                            <img src={foto15} alt="Retrato da Mariana" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-slider-section scroll-reveal scroll-reveal-delay-1">
                <div className="container">
                    <div className="section-top">
                        <p className="section-tag">Para além do design.</p>
                    </div>

                    <div className="about-slider-dual">
                        <div className="about-slider">
                            <div className="about-slider-track">
                                {[...carouselImages, ...carouselImages].map((image, index) => (
                                    <div className="about-slide" key={`top-slide-${index}`}>
                                        <img src={image} alt={`Arquivo visual superior ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="about-slider">
                            <div className="about-slider-track about-slider-track-reverse">
                                {[...carouselImages, ...carouselImages].map((image, index) => (
                                    <div className="about-slide" key={`bottom-slide-${index}`}>
                                        <img src={image} alt={`Arquivo visual inferior ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container about-journey-section">
                <div className="section-top scroll-reveal scroll-reveal-delay-1">
                    <p className="section-tag">O meu percurso.</p>
                </div>

                <h2 className="about-section-title scroll-reveal scroll-reveal-delay-2">
                    O caminho que me trouxe até aqui
                </h2>

                <div className="about-journey-grid">
                    {journeyItems.map((item, index) => (
                        <article
                            className={`journey-card scroll-reveal scroll-reveal-delay-${(index % 3) + 1}`}
                            key={item.id}
                        >
                            <span className="journey-number">{item.number}</span>
                            <p className="journey-meta">{item.meta}</p>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="container about-goals-section">
                <div className="section-top scroll-reveal scroll-reveal-delay-1">
                    <p className="section-tag">O que procuro.</p>
                </div>

                <h2 className="about-section-title scroll-reveal scroll-reveal-delay-2">
                    Objetivos atuais
                </h2>

                <div className="about-goals-grid">
                    {goals.map((goal, index) => (
                        <article
                            className={`goal-metric-card scroll-reveal scroll-reveal-delay-${(index % 3) + 1}`}
                            key={goal.id}
                        >
                            <div className="goal-metric-number">{goal.number}</div>
                            <p className="goal-metric-label">{goal.label}</p>
                            <p className="goal-metric-description">{goal.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="container tools-section scroll-reveal scroll-reveal-delay-1">
                <div className="section-top tools-top">
                    <p className="section-tag">Ferramentas do meu processo de trabalho</p>
                </div>

                <div className="tools-marquee">
                    <div className="tools-marquee-track">
                        {[...toolsList, ...toolsList].map((tool, index) => (
                            <div
                                key={`${tool.name}-${index}`}
                                className="tool-marquee-item"
                                aria-label={tool.name}
                            >
                                <img
                                    src={`https://cdn.simpleicons.org/${tool.icon}/1E1E1E`}
                                    alt={tool.name}
                                    width="42"
                                    height="42"
                                />
                                <span className="tool-marquee-name">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About