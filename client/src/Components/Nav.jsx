import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const Nav = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const animationRef = useRef(null);
    const navigate = useNavigate();

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
        <header className='flex justify-center relative p-[30px]'>
            <nav className="w-[90%] flex justify-between items-center">
                <button type="button" className='cursor-pointer' onClick={(e)=>{
                    e.preventDefault();
                    navigate('/');
                }}><p className="text-5xl font-logo font-semibold text-primary text-center">ChefHub</p></button>
                <ul 
                    className={`flex items-center gap-8 max-sm:hidden ${isMenuOpen ? 'flex! absolute top-[85px] right-5 bg-white rounded-2xl p-5 shadow-md z-10 flex-col animate-slideIn' : ''} ${isAnimating && !isMenuOpen ? 'flex! absolute top-[85px] right-5 bg-white rounded-2xl p-5 shadow-md z-10 flex-col animate-slideOut' : ''}`}
                    ref={animationRef}
                >
                    <li>
                        <NavLink
                            to="recipes"
                            className={({ isActive }) => (isActive ? "text-primary" : "nav-item")}
                            end
                        >
                            Recipes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="blogs"
                            className={({ isActive }) => (isActive ? "text-primary" : "nav-item")}
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
                                className={({ isActive }) => (isActive ? "flex items-center text-primary font-semibold" : "flex items-center")}
                                end
                            >
                                <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="pfp" className='w-10 h-10 rounded-full object-cover mr-2.5'/>
                                <span>Sasi</span>
                            </NavLink>
                        </li>
                        :
                        <li className='border-1 border-[#2563EB] w-[100px] p-2.5 inline-flex justify-center items-center rounded-[14px] bg-primary cursor-pointer'>
                            <AiOutlineUser color='#fff' fontWeight={600} className='mr-[8px]'/>
                            <NavLink
                                to="auth"
                                className={({ isActive }) => (isActive ? "text-white font-semibold" : "text-white")}
                            >
                                Login
                            </NavLink>
                        </li> 
                    }
                </ul>
                <button type="button" className='flex flex-col h-[26px] justify-evenly sm:hidden' onClick={()=>{
                    setIsMenuOpen(!isMenuOpen);
                    setIsAnimating(true);
                }}>
                    <span className={`line ${isMenuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`}></span>
                    <span className={`line ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`line ${isMenuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[9px]' : ''}`}></span>
                </button>
            </nav>
        </header>
    )
}

export default Nav;