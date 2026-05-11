import nabuScreen1 from "../../assets/NABU/NABU_2.png"
import nabuScreen2 from "../../assets/NABU/nabu-phones.jpg"
import nabuScreen3 from "../../assets/NABU/Equipa_nabu.JPG"
import nabuScreen4 from "../../assets/FOTOS_AMAIS/amigos_3.jpg"

import carlosImg from "../../assets/NABU/Group 4.png"
import franciscoImg from "../../assets/NABU/Group 2.png"
import marianaImg from "../../assets/NABU/Group 3.png"
import mariaImg from "../../assets/NABU/Group 4.png"

function Nabu() {
    const projectMeta = [
        { id: "year", label: "Ano", value: "2025" },
        { id: "role", label: "O Meu Papel", value: "UX/UI Design · Desenvolvimento" },
        { id: "team", label: "Equipa", value: "4 elementos" },
    ]

    const teamMembers = [
        { id: "carlos", name: "Carlos Teixeira", image: carlosImg },
        { id: "francisco", name: "Francisco Seabra", image: franciscoImg },
        { id: "mariana", name: "Mariana Tavares", image: marianaImg },
        { id: "maria", name: "Maria Leonor Frias", image: mariaImg },
    ]

    const caseSections = [
        {
            id: "contexto",
            title: "O Contexto.",
            text: "No âmbito da unidade curricular de Bases de Dados e Tecnologias Server-side, desenvolvemos a NABU como resposta ao problema do desperdício de excedentes alimentares de hortas caseiras. O projeto foi pensado para o município da Lousã, com foco na sustentabilidade, economia local e consumo de proximidade.",
        },
        {
            id: "objetivo",
            title: "O Objetivo.",
            text: "O principal objetivo foi criar uma plataforma web que permitisse a compra, venda e troca de produtos alimentares locais entre produtores e consumidores. Procurámos desenvolver uma solução intuitiva, acessível e alinhada com as necessidades reais da comunidade, reduzindo o desperdício alimentar e promovendo alternativas mais sustentáveis aos supermercados tradicionais.",
        },
        {
            id: "processo",
            title: "O Processo.",
            text: "O projeto passou por várias fases de pesquisa, definição de funcionalidades, prototipagem de interface e desenvolvimento iterativo. A aplicação foi construída com HTML, CSS, Bootstrap, JavaScript, PHP e MySQL, integrando sistemas de mensagens, notificações, favoritos, encomendas com estados e um mapa interativo para explorar anúncios por localização.",
        },
        {
            id: "resultado",
            title: "O Resultado.",
            text: "O resultado final foi uma aplicação funcional que permite anunciar produtos, comunicar diretamente entre utilizadores, acompanhar o estado das encomendas e visualizar os anúncios em mapa. Para além da solução técnica, o projeto reforçou competências em UX/UI, desenvolvimento web full-stack e criação de soluções digitais orientadas para problemas reais com impacto social.",
        },
    ]

    return (
        <main className="project-page">
            <section className="container project-hero">
                <div className="project-hero-inner">
                    <div className="project-hero-copy">
                        <p className="about-label">
                            Projeto Académico · UX/UI Design · Full-Stack · 2025
                        </p>

                        <h1 className="project-title">NABU</h1>

                        <p className="project-description">
                            Plataforma web para compra, venda e troca de excedentes alimentares
                            locais, promovendo sustentabilidade, proximidade e consumo consciente.
                        </p>
                    </div>

                    <div className="project-hero-image-card">
                        <img
                            src={nabuScreen1}
                            alt="Mockup do projeto NABU"
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
                                    src={nabuScreen2}
                                    alt="Interface e layouts do projeto NABU"
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
        </main>
    )
}

export default Nabu