import { useEffect, useState } from "react"
import foto1 from "../assets/FOTOGRAFIAS MINHAS/IMG_1449.jpeg"
import foto2 from "../assets/FOTOGRAFIAS MINHAS/IMG_0500.jpeg"
import foto3 from "../assets/FOTOGRAFIAS MINHAS/eu_1.jpg"
import foto4 from "../assets/FOTOS_AMAIS/IMG_2997.jpeg"
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
            label: "Creative team",
            description:
                "Working with a team that shares ideas and cares about details."
        },
        {
            id: 2,
            number: "02",
            label: "Keep learning",
            description:
                "Keep growing in UI/UX, motion and digital product design."
        },
        {
            id: 3,
            number: "03",
            label: "Healthy work",
            description:
                "Being in an environment that respects people and supports growth."
        },
        {
            id: 4,
            number: "04",
            label: "Long term",
            description:
                "Leading teams and helping good ideas become real products."
        }
    ]

    const academicPath = [
        {
            id: 0,
            label: "2022 — Present",
            period: "University of Aveiro",
            title: "Multimedia and Communication Technologies degree",
            text: "Throughout my degree, I have been developing skills in digital design, visual communication, web and user experience, building a foundation between creativity, structure and critical thinking.",
            image: foto5
        },
        {
            id: 1,
            label: "Focus",
            period: "Discovering my direction",
            title: "UI/UX, web design and visual identity",
            text: "During my academic path, I started to realize a stronger interest in digital interfaces, websites and experiences that feel clear, intuitive and visually consistent.",
            image: foto1
        },
        {
            id: 2,
            label: "Projects",
            period: "Learning by doing",
            title: "Practice, research and portfolio building",
            text: "I’ve been trying to apply what I learn in practical projects, combining research, design and development to create more complete and consistent digital solutions.",
            image: foto3
        },
        {
            id: 3,
            label: "Next step",
            period: "Professional growth",
            title: "Growing into a stronger designer",
            text: "I want to keep learning, develop solid projects and enter the industry with a more mature, thoughtful and intentional design practice.",
            image: foto4
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

    const [activeStep, setActiveStep] = useState(0)

    useEffect(() => {
        const steps = document.querySelectorAll(".timeline-step")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index)
                        setActiveStep(index)
                    }
                })
            },
            {
                threshold: 0.55
            }
        )

        steps.forEach((step) => observer.observe(step))

        return () => observer.disconnect()
    }, [])

    const activeItem = academicPath[activeStep]

    return (
        <main className="about-page">
            <section className="container about-hero">
                <div className="about-hero-inner">
                    <div className="about-hero-text">
                        <p className="about-label">About me</p>
                        <h1 className="about-hero-title">
                            I like my layouts the way I like my days:{" "}
                            <span>clean, structured</span> and with the right details in the
                            right place.
                        </h1>
                        <p className="about-hero-body">
                            I’m a multimedia designer focused on UI/UX and web design,
                            interested in creating digital experiences that feel clear,
                            organized and human. I care about structure, small decisions and
                            how people actually move through an interface.
                        </p>
                    </div>

                    <div className="about-hero-photos">
                        <div className="about-photo about-photo-main">
                            <img src={foto15} alt="Mariana smiling" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-slider-section">
                <div className="container">
                    <div className="section-top">
                        <p className="section-tag">Para além do design</p>
                    </div>

                    <div className="about-slider-dual">
                        <div className="about-slider">
                            <div className="about-slider-track">
                                {[...carouselImages, ...carouselImages].map((image, index) => (
                                    <div className="about-slide" key={`top-slide-${index}`}>
                                        <img src={image} alt={`Archive visual top ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="about-slider">
                            <div className="about-slider-track about-slider-track-reverse">
                                {[...carouselImages, ...carouselImages].map((image, index) => (
                                    <div className="about-slide" key={`bottom-slide-${index}`}>
                                        <img
                                            src={image}
                                            alt={`Archive visual bottom ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container about-goals-section">
                <h2 className="about-section-title">Current intentions</h2>

                <div className="about-goals-grid">
                    {goals.map((goal) => (
                        <article className="goal-metric-card" key={goal.id}>
                            <div className="goal-metric-number">{goal.number}</div>
                            <p className="goal-metric-label">{goal.label}</p>
                            <p className="goal-metric-description">{goal.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="container about-path-section">
                <div className="row">
                    <div className="col-lg-3">
                        <p className="about-label">Route so far</p>
                    </div>

                    <div className="col-lg-9">
                        <div className="scroll-story-layout">
                            <div className="scroll-story-sticky">
                                <div className="sticky-story-card">
                                    <div className="sticky-story-image">
                                        <img src={activeItem.image} alt={activeItem.title} />
                                    </div>

                                    <div className="sticky-story-content">
                                        <p className="sticky-story-meta">{activeItem.period}</p>
                                        <h3>{activeItem.title}</h3>
                                        <p>{activeItem.text}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="scroll-story-steps">
                                {academicPath.map((item, index) => (
                                    <article
                                        key={item.id}
                                        data-index={index}
                                        className={`timeline-step ${
                                            activeStep === index ? "is-active" : ""
                                        }`}
                                    >
                                        <div className="timeline-step-marker">
                                            <span className="timeline-step-dot"></span>
                                            {index !== academicPath.length - 1 && (
                                                <span className="timeline-step-line"></span>
                                            )}
                                        </div>

                                        <div className="timeline-step-copy">
                                            <p className="timeline-step-label">{item.label}</p>
                                            <span className="timeline-step-period">{item.period}</span>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container tools-section">
                <div className="section-top tools-top">
                    <p className="section-tag">Tools carried</p>
                    <p className="tools-helper">
                        A selection of tools that travel with me.
                    </p>
                </div>

                <div className="tools-marquee">
                    <div className="tools-marquee-track">
                        {[...toolsList, ...toolsList].map((tool, index) => (
                            <div
                                key={`${tool.id}-${index}`}
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

            <section className="container about-resume-section">
                <div className="row">
                    <div className="col-lg-8">
                        <p className="about-label">Next destination</p>
                        <h2 className="about-resume-title">
                            Curious about my work, my path and what I want to build next?
                        </h2>
                        <p className="about-resume-text">
                            You can explore my projects, academic background and interests, or
                            get in touch if you think we should create something together.
                        </p>
                        <a href="/contact" className="cta-link">
                            Entrar em contacto
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About