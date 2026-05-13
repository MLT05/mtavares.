import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useLayoutEffect } from "react"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Work from "./pages/Work.jsx"
import Contact from "./pages/Contact.jsx"
import Nabu from "./pages/work_pages/NABU.jsx"
import Tuts from "./pages/work_pages/TUTS.jsx"
import Retex from "./pages/work_pages/RETEX.jsx"
import Hortaranda from "./pages/work_pages/HORTARANDA.jsx"
import Footer from "./components/Footer.jsx"
import ContactSection from "./components/ContactSection.jsx"
import useScrollReveal from "./hooks/useScrollReveal..js"

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual"
        }
    }, [])

    useLayoutEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })

        document.body.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
    }, [pathname])

    return null
}

function AppContent() {
    useScrollReveal()

    return (
        <>
            <ScrollToTop />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/work/nabu" element={<Nabu />} />
                <Route path="/work/tuts" element={<Tuts />} />
                <Route path="/work/retex" element={<Retex />} />
                <Route path="/work/hortaranda" element={<Hortaranda />} />
            </Routes>

            <ContactSection />
            <Footer />
        </>
    )
}

function App() {
    return <AppContent />
}

export default App