import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import '../Styles/Layout.css';

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