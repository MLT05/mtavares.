import hortarandaImg from "../assets/HORTARANDA/Hortaranda_phone.png"
import nabuImg from "../assets/NABU/phone_mockup.png"
import tutsImg from "../assets/TUTS/mockup_tuts.svg"
import retexImg from "../assets/RETEX/website.svg"

const projectsData = [
    {
        slug: "tuts",
        meta: "UX/UI DESIGN & DEV @2026",
        title: "Tut'S",
        description: "Plataforma de auto-tutoria com IA para apoio ao estudo autónomo no ensino superior, com foco em fiabilidade, personalização e ética.",
        image: tutsImg,
        isNew: true,
        year: 2026,
    },
    {
        slug: "retex",
        meta: "UX/UI DESIGN @2025",
        title: "RETEX",
        description: "Plataforma que revoluciona a forma como lidamos com o desperdício têxtil.",
        image: retexImg,
        isNew: false,
        year: 2025,
    },
    {
        slug: "nabu",
        meta: "UX/UI DESIGN & DEV @2024",
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
        description: "Website interativo para planear hortas em varandas e promover práticas de auto-sustentabilidade alimentar em ambientes urbanos.",
        image: hortarandaImg,
        isNew: false,
        year: 2023,
    },
]

export default projectsData