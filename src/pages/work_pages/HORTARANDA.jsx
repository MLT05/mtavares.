import nabuLogo from "../../assets/NABU/Captura de ecrã 2026-05-08, às 18.56.07 1.svg"
import nabuScreen1 from "../../assets/NABU/mockup_nabu.png"
import nabuScreen2 from "../../assets/NABU/NABU_2.png"
import nabuScreen3 from "../../assets/NABU/Captura de ecrã 2026-05-08, às 18.56.07 1.svg"

function Nabu() {
    const galleryImages = [
        {
            id: "nabu-1",
            src: nabuScreen1,
            alt: "Mockup principal do projeto NABU",
            className: "project-image-1",
        },
        {
            id: "nabu-2",
            src: nabuScreen2,
            alt: "Interface do projeto NABU",
            className: "project-image-2",
        },
        {
            id: "nabu-3",
            src: nabuScreen3,
            alt: "Identidade visual do projeto NABU",
            className: "project-image-3",
        },
    ]

    const process = [
        {
            id: "contexto",
            title: "Contexto",
            text: "No âmbito da unidade curricular de Bases de Dados e Tecnologias Server-side, fui desafiada, em equipa, a desenvolver uma aplicação web funcional para o município da Lousã que promovesse a sustentabilidade e a economia local. A partir do problema do desperdício de excedentes de hortas caseiras, nasceu a NABU, uma plataforma digital que liga produtores e consumidores locais em torno de práticas de consumo mais conscientes.",
        },
        {
            id: "objetivo",
            title: "Objetivo",
            text: "O principal objetivo da NABU foi criar uma solução web que permitisse a compra, venda e troca de excedentes alimentares locais, reduzindo o desperdício e facilitando o acesso a produtos frescos e biológicos. Paralelamente, procurámos desenvolver uma experiência intuitiva e acessível, alinhada com as necessidades de agricultores e pequenos produtores da região da Lousã.",
        },
        {
            id: "processo",
            title: "Processo",
            text: "O projeto passou por várias fases de pesquisa, definição de requisitos, prototipagem de interface e desenvolvimento iterativo em HTML, CSS, Bootstrap, JavaScript, PHP e MySQL. Ao longo do processo, estruturámos uma base de dados relacional, implementámos funcionalidades dinâmicas com AJAX (mensagens, notificações, geolocalização) e aplicámos boas práticas de segurança e organização de código para garantir uma aplicação estável e escalável.",
        },
        {
            id: "resultado",
            title: "Resultado",
            text: "O resultado foi uma aplicação web funcional que permite publicar anúncios de produtos, comunicar diretamente entre comprador e vendedor, acompanhar encomendas, guardar favoritos e explorar anúncios num mapa interativo com base na localização. Para além do impacto social e ambiental potencial, o projeto consolidou competências técnicas e de UX, reforçando a minha capacidade de conceber e desenvolver soluções digitais orientadas para problemas reais.",
        },
    ]

    const tools = [
        { id: "HTML", name: "HTML" },
        { id: "CSS", name: "CSS" },
        { id: "Bootstrap", name: "Bootstrap" },
        { id: "Javascript", name: "Javascript" },
        { id: "PHP", name: "PHP" },
        { id: "MYSQL", name: "MYSQL" },

    ]

    return (
        <main className="project-page">
            <section className="container project-hero">
                <div className="project-hero-inner">
                    <div className="project-hero-copy">
                        <p className="about-label"> Projeto Curricular · UX/UI Design · 2025</p>
                        <h1 className="project-title"> HORTARANDA</h1>
                        <p className="project-description">
                            Um conceito de organização doméstica e planeamento com foco em
                            simplicidade, clareza e utilidade.
                        </p>
                    </div>

                    <div className="project-logo-box">
                        <img
                            src={nabuLogo}
                            alt="Logo do projeto NABU"
                            className="project-logo"
                        />
                    </div>
                </div>
            </section>

            <section className="project-slider-section">
                <div className="container">
                    <div className="section-top">
                        <p className="section-tag">Imagens do projeto</p>
                    </div>

                    <div className="project-mosaic-grid">
                        {galleryImages.map((image) => (
                            <div
                                className={`project-image-frame ${image.className}`}
                                key={image.id}
                            >
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container project-process-section">
                <div className="section-top">
                    <p className="section-tag">Processo</p>
                </div>

                <div className="project-process-grid">
                    {process.map((item) => (
                        <article className="project-process-card" key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="container project-tools-section">
                <div className="section-top">
                    <p className="section-tag">Ferramentas utilizadas</p>
                </div>

                <div className="project-tools-list">
                    {tools.map((tool) => (
                        <span className="project-tool-pill" key={tool.id}>
              {tool.name}
            </span>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Nabu