import { Outlet } from "react-router-dom"
import BackButton from "./BackButton"

function InnerLayout() {
    return (
        <>
            <div className="container">
                <BackButton />
            </div>

            <Outlet />
        </>
    )
}

export default InnerLayout