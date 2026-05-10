import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import Nabu from "./pages/work_pages/NABU.jsx"
import Tuts from "./pages/work_pages/TUTS.jsx"
import Retex from "./pages/work_pages/RETEX.jsx"
import Hortaranda from "./pages/work_pages/HORTARANDA.jsx"
import Footer from "./components/Footer.jsx"
import ContactSection from "./components/ContactSection.jsx";


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