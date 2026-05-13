import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function useScrollReveal() {
    const location = useLocation()

    useEffect(() => {
        const elements = document.querySelectorAll(".scroll-reveal")

        if (!elements.length) return

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
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px",
            }
        )

        elements.forEach((el) => {
            el.classList.remove("is-visible")
            observer.observe(el)
        })

        return () => observer.disconnect()
    }, [location.pathname])
}

export default useScrollReveal