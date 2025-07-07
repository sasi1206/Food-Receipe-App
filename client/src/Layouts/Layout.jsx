import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Nav />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;