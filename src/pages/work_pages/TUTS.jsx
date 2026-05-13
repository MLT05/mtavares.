import { useEffect } from "react"
import tutsScreen1 from "../../assets/TUTS/logo.png"
import tutsScreen2 from "../../assets/TUTS/tuts_phones.svg"

import carlosImg from "../../assets/TUTS/ICON_EQUIPA.svg"
import marianaImg from "../../assets/TUTS/ICON_EQUIPA.svg"
import mariaImg from "../../assets/TUTS/ICON_EQUIPA.svg"
import gilImg from "../../assets/TUTS/ICON_EQUIPA.svg"
import { FiInstagram, FiLinkedin } from "react-icons/fi"

function Tuts() {
    useEffect(() => {
        const elements = document.querySelectorAll(".scroll-reveal")

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible")
                        obs.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px",
            }
        )

        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const projectMeta = [
        { id: "year", label: "Ano", value: "2026" },
        { id: "role", label: "O Meu Papel", value: "UX/UI Design & Developer · Investigação" },
        { id: "team", label: "Equipa", value: "4 elementos" },
    ]

    const teamMembers = [
        { id: "carlos", name: "Carlos Teixeira", image: carlosImg },
        { id: "mariana", name: "Mariana Tavares", image: marianaImg },
        { id: "maria", name: "Maria Leonor Frias", image: mariaImg },
        { id: "gil", name: "Gil Almeida", image: gilImg },
    ]

    const caseSections = [
        {
            id: "contexto",
            title: "O Contexto.",
            text: "A Tut'S surge no âmbito do projeto final da Licenciatura em Multimédia e Tecnologias da Comunicação, na Universidade de Aveiro, desenvolvida em resposta a uma proposta do professor David Oliveira, nosso orientador. Inserido no contexto do ensino superior, o projeto parte da realidade de alunos que lidam diariamente com materiais dispersos, excesso de informação e uma forte exigência de autonomia no estudo. Embora os chatbots e outras ferramentas de IA generativa já façam parte destas rotinas, muitas das soluções atuais continuam a apresentar problemas de fiabilidade, falta de alinhamento com os conteúdos curriculares e riscos de uso pouco crítico da tecnologia.",
        },
        {
            id: "objetivo",
            title: "O Objetivo.",
            text: "O principal objetivo da Tut'S é criar uma plataforma de auto-tutoria com Inteligência Artificial orientada para apoiar o estudo autónomo no ensino superior. A proposta pretende centralizar conteúdos académicos, oferecer respostas mais fiáveis através de arquitetura RAG e promover uma experiência de aprendizagem mais personalizada, ética e ajustada às necessidades reais dos estudantes.",
        },
        {
            id: "processo",
            title: "O Processo.",
            text: "O processo iniciou-se com uma fase de pesquisa sobre o contexto do ensino superior, os hábitos de estudo dos alunos e o papel da Inteligência Artificial no apoio à aprendizagem. Paralelamente, foram analisadas soluções já existentes e realizadas entrevistas a docentes e estudantes, de forma a identificar necessidades concretas, limitações recorrentes e oportunidades relevantes para a construção da plataforma. Com base nesses insights, foram sendo definidos o conceito da solução, a sua proposta de valor, as funcionalidades prioritárias e os princípios orientadores da experiência. Em paralelo, desenvolveu-se também a identidade visual da Tut'S e iniciou-se a componente de desenvolvimento técnico da plataforma.",
        },
        {
            id: "resultado",
            title: "O Resultado.",
            text: "Até ao momento, o projeto encontra-se em desenvolvimento, tendo sido já definida a construção visual da marca, o posicionamento conceptual e as bases da experiência da plataforma. A componente de desenvolvimento e implementação funcional continua em curso, acompanhando a evolução da investigação, da arquitetura do sistema e das decisões estratégicas do projeto.",
        },
    ]

    return (
        <main className="project-page tuts-page">
            <section className="container project-hero scroll-reveal scroll-reveal-delay-1">
                <div className="project-hero-inner">
                    <div className="project-hero-copy">
                        <p className="about-label">
                            Projeto Académico · UX/UI Design · Developer · 2026
                        </p>

                        <div className="project-title-row">
                            <h1 className="project-title">Tut'S</h1>

                            <div className="project-social-footer-links">
                                <a
                                    href="https://www.instagram.com/tuts.ai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-social-footer-link"
                                    aria-label="Instagram da Tut'S"
                                    title="Instagram da Tut'S"
                                >
                                    <FiInstagram />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/tut-s-7899103b7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-social-footer-link"
                                    aria-label="LinkedIn da Tut'S"
                                    title="LinkedIn da Tut'S"
                                >
                                    <FiLinkedin />
                                </a>
                            </div>
                        </div>

                        <p className="project-description">
                            Plataforma de auto-tutoria com IA para apoio ao estudo autónomo
                            no ensino superior, com foco em fiabilidade, personalização e ética.
                        </p>
                    </div>

                    <div className="project-hero-image-card">
                        <img
                            src={tutsScreen1}
                            alt="Mockup do projeto Tut'S"
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
                            <>
                                <article className="project-inline-image-row scroll-reveal scroll-reveal-delay-2">
                                    <img
                                        src={tutsScreen2}
                                        alt="Interface e conceito visual do projeto Tut'S"
                                        className="project-inline-image bo"
                                    />
                                </article>

                                <article className="project-inline-image-row scroll-reveal scroll-reveal-delay-3">
                                    <div className="project-embed-card bo">
                                        <div className="project-embed-header">
                                            <p className="project-embed-label">Manual da marca</p>
                                        </div>

                                        <div className="project-inline-embed">
                                            <iframe
                                                src="https://publuu.com/flip-book/1107877/2467644/page/1?embed"
                                                title="Apresentação do projeto Tut'S"
                                                className="project-pdf-embed publuuflip"
                                                scrolling="no"
                                                frameBorder="0"
                                                allow="clipboard-write; autoplay; fullscreen"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </article>
                            </>
                        )}
                    </div>
                ))}
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

export default Tuts