import { Routes, Route, Outlet } from "react-router-dom"
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



function App() {
    return (
        <>
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

export default App