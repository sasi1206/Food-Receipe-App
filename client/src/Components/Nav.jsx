import { useEffect, useRef, useState } from 'react';
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import '../Styles/Nav.css'

const Nav = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isMobile,setIsMobile] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const animationRef = useRef(null);

    useEffect(()=>{

        const handleResize = () => {
            window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);

        return () =>{
            window.removeEventListener('resize', handleResize);
            setIsMobile(false);
        }
    },[]);

    useEffect(()=>{
        animationRef.current?.addEventListener('animationend', () => {
            setIsAnimating(false);
        })

        animationRef.current?.addEventListener('animationcancel', () => {
            setIsAnimating(true);
        })

        return ()=>{
            if (animationRef.current) {
                animationRef.current.removeEventListener('animationend', () => setIsAnimating(false));
                animationRef.current.removeEventListener('animationcancel', () => setIsAnimating(true));
            }
        }
    },[animationRef.current])

    return(
        <header>
            <nav className="nav-bar">
                <button type="button"><p className="logo">ChefHub</p></button>
                <ul 
                    className={`nav-links ${isMenuOpen ? 'open' : ''} ${isAnimating && !isMenuOpen ? 'close' : ''} ${isMobile ? 'mobile' : ''}`}
                    ref={animationRef}
                >
                    <li>
                        <NavLink
                            to="recipes"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            end
                        >
                            Recipes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="blogs"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            end
                        >
                            Blogs
                        </NavLink>
                    </li>
                    {
                        isLoggedIn 
                        ?
                        <li>
                            <NavLink
                                to="profile"
                                className={({ isActive }) => (isActive ? "profile active" : "profile")}
                                end
                            >
                                <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="pfp" />
                                <span>Sasi</span>
                            </NavLink>
                        </li>
                        :
                        <li className='login'>
                            <AiOutlineUser color='#fff' fontWeight={600}/>
                            <NavLink
                                to="login"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                Login
                            </NavLink>
                        </li> 
                    }
                </ul>
                <button type="button" className='menu-btn' onClick={()=>{
                    setIsMenuOpen(!isMenuOpen);
                    setIsAnimating(true);
                }} style={{ display: isMobile ? 'flex' : 'none' }}>
                    <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
                </button>
            </nav>
        </header>
    )
}

export default Nav;