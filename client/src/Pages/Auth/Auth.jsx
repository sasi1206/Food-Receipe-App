import { useState , useRef, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { handleLogin , handleRegister } from '../../Services/Auth';

const Auth = ()=>{
    const [AuthType,setAuthType] = useState("Login");
    const [activeTab, setActiveTab] = useState("Login");
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const animationRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(()=>{
        const handleAnimation = ()=>{
            setTimeout(() => {
                setActiveTab(AuthType)
            }, 150);
        }

        animationRef.current?.addEventListener('animationstart', handleAnimation)

        return ()=>{
            if (animationRef.current) {
                animationRef.current.removeEventListener('animationstart', handleAnimation);
            }
        }
    },[AuthType])

    useEffect(() => {
    const video = videoRef.current;
    if (video) {
        video.currentTime = 0;
        video.play();
    }
    },[]);

    return (
        <section className="h-dvh font-secondary">
            <section className="h-full w-full flex flex-col items-center gap-10">
                <section className="mt-2 w-[210px] p-2 rounded-full flex justify-between items-center bg-gray-200 relative ">
                    {
                        ["Login","Register"].map(auth=>(
                            <button className={`${ activeTab === auth ? 'text-white' : ''} transition-colors transition-discrete z-10 rounded-full px-4 py-2 cursor-pointer w-1/2`}
                            onClick={(e)=>{
                                e.preventDefault();
                                setAuthType(auth)
                            }}
                            >{auth}</button>
                        ))
                    }
                    <p className={`absolute bg-primary rounded-full px-4 py-2 h-2/3 w-[100px] transition-discrete transition-all ${AuthType === "Register" ? 'animate-LoginSlideIn mr-2' : 'animate-LoginSlideOut ml-2'}`} ref={animationRef}></p>
                </section>
                <section
                    className={`border-1 border-gray-300 flex items-center duration-700 ease-in-out transform transition-all h-4/5 w-3/4 rounded-2xl relative`}
                >
                    <section className={`p-10 ${AuthType === "Register" ? "absolute animate-RegisterForm" : "absolute animate-LoginForm"} w-1/2`}>
                        <p className="text-center text-2xl font-semibold text-primary">{AuthType === "Login" ? 'Your recipe book awaits!' : 'Fire up your apron — Join ChefHub!'}</p>
                        <form className={`flex flex-col group p-4 justify-center`}>
                            {
                                AuthType === "Login" ? 
                                    <>
                                        <label htmlFor="email" className='auth-label'>Email</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            value={email} 
                                            onChange={(e)=>setEmail(e.target.value)} 
                                            className="auth-input"
                                            placeholder='Enter your email'    
                                        />
                                        <label htmlFor="password" className="auth-label">Password</label>
                                        <input 
                                            type="password" 
                                            name="password" 
                                            value={password} onChange={(e)=>setPassword(e.target.value)} 
                                            className="auth-input" 
                                            placeholder="Enter your password"
                                        />
                                        <button type="submit" onClick={handleLogin} className="auth-button w-3/8 mt-5">Log in</button>
                                        <p className="mt-5">
                                            <NavLink
                                                to="forgot-password"
                                                className="text-primary font-semibold hover:underline"
                                            >Forgot Your Password?</NavLink>
                                        </p>
                                    </>
                                : 
                                    <>
                                        <label htmlFor="name" className="auth-label">Name</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            value={name} 
                                            onChange={(e)=>setName(e.target.value)} 
                                            className="auth-input" 
                                            placeholder="Enter your name"
                                        />
                                        <label htmlFor="email" className="auth-label">Email</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            value={email} 
                                            onChange={(e)=>setEmail(e.target.value)} 
                                            className="auth-input"
                                            placeholder="Enter your email"
                                        />
                                        <label htmlFor="password" className="auth-label">Password</label>
                                        <input 
                                            type="password" 
                                            name="password" 
                                            className="auth-input" 
                                            value={password} 
                                            onChange={(e)=>setPassword(e.target.value)} 
                                            placeholder="Enter your password"
                                        />
                                        <button type="submit" onClick={handleRegister} className="auth-button w-2/5"
                                        >Join CHefHub</button>
                                    </>
                            }
                        </form>
                        <p></p>
                    </section>
                    <section className={`w-1/2 h-full top-0 flex flex-col items-center bg-white ${AuthType === "Register" ? "absolute animate-RegisterSection" : "absolute animate-LoginSection"}`}>
                        <video src={AuthType === "Register" ? 'Chef.mp4' : "Login.mp4"} autoPlay muted playsInline ref={videoRef} className="w-[400px] h-[400px]"></video>
                        <p className="w-4/5 text-center text-primary text-base font-semibold">{AuthType === "Register" ? 'Join our culinary community and discover amazing recipes, connect with fellow chefs, and elevate your cooking skills!' : 'Log in to explore sizzling new recipes and connect with top chefs!'}</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Auth;