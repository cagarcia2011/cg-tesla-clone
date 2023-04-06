import { Outlet } from "react-router-dom"
import { Footer, Nav } from "../components"

export const HomeLayout = () => {

    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}