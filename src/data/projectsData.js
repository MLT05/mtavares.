import hortarandaImg from "../assets/HORTARANDA/LOGO_HORTA.png"
import nabuImg from "../assets/NABU/phone_mockup.png"
import tutsImg from "../assets/TUTS/mockup_tuts.svg"
import retexImg from "../assets/RETEX/website.svg"

const projectsData = [
    {
        slug: "tuts",
        meta: "WEB DESIGN @2026",
        title: "Tut'S",
        description: "Website pensado para criar uma experiência de aprendizagem mais próxima, acessível e bem estruturada.",
        image: tutsImg,
        isNew: true,
        year: 2026,
    },
    {
        slug: "retex",
        meta: "GRAPHIC DESIGN @2025",
        title: "RETEX",
        description: "Projeto visual focado em identidade, comunicação digital e presença visual para conteúdos musicais.",
        image: retexImg,
        isNew: false,
        year: 2025,
    },
    {
        slug: "nabu",
        meta: "UX/UI DESIGN @2024",
        title: "NABU",
        description: "Um conceito de organização doméstica e planeamento com foco em simplicidade, clareza e utilidade.",
        image: nabuImg,
        isNew: true,
        year: 2024,
    },
    {
        slug: "hortaranda",
        meta: "UX/UI DESIGN & DEV @2023",
        title: "Hortaranda",
        description: "Uma experiência digital repensada para oferecer uma navegação mais clara, intuitiva e envolvente.",
        image: hortarandaImg,
        isNew: false,
        year: 2023,
    },
]

export default projectsData