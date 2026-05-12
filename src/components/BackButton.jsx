import { useNavigate, useLocation } from "react-router-dom"

function BackButton() {
    const navigate = useNavigate()
    const location = useLocation()

    if (location.pathname === "/") return null

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <button type="button" className="back-button" onClick={handleBack}>
            ← Voltar
        </button>
    )
}

export default BackButton