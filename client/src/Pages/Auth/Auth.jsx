import { useState , useRef, useEffect , useActionState , startTransition } from "react";
import { NavLink } from 'react-router-dom';
import { TbError404 , TbCheck } from 'react-icons/tb'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { handleLogin , handleRegister } from '../../Services/Auth';

const EmailSchema = z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address");

const PasswordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password is too long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )

const RegisterSchema = z.object({
    username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters")
    .regex(
      /^[a-z0-9_]+$/,
      "Username can only contain lowercase letters, numbers, and underscores"
    ),
    email:EmailSchema,
    password:PasswordSchema
})

const LoginSchema = z.object({
    email:EmailSchema,
    password:PasswordSchema
});


const Auth = ()=>{
    const [AuthType,setAuthType] = useState("Login");
    const [activeTab, setActiveTab] = useState("Login");
    const [error,formAction,isPending] = useActionState(
        async (prevState,formData)=>{
            const email = formData.get('email');
            const password = formData.get('password');
            const username = formData.get('username');

            try {
                if(AuthType === "Register"){
                    const message =  await handleRegister(username,email,password);
                    setAuthType("Login");
                    return {
                        success:true,
                        message
                    }
                }
                if(AuthType === "Login"){
                    const message = await handleLogin(email,password);
                    return {
                        success:true,
                        message
                    };
                }
            } catch (error) {
                return {
                    success:false,
                    message:error?.message
                };
            }
        }, null
    );

    const schema = AuthType === "Login" ? LoginSchema : RegisterSchema;

    const { register , handleSubmit , formState: { errors } , reset } = useForm({
        resolver: zodResolver(schema)
    });
    const animationRef = useRef(null);
    const videoRef = useRef(null);
    
    useEffect(()=>{
        reset();
        const handleAnimation = ()=>{
            setTimeout(() => {
                setActiveTab(AuthType)
            }, 150);
        }

        animationRef.current?.addEventListener('animationstart', handleAnimation)

        const video = videoRef.current;
        if (video) {
            video.currentTime = 0;
            video.play();
        }

        return ()=>{
            if (animationRef.current) {
                animationRef.current.removeEventListener('animationstart', handleAnimation);
            }
        }
    },[AuthType]);

    const onSubmit = (data) => {
        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });

        startTransition(() => {
            formAction(formData);
        });
    };


    return (
        <section className="mb-6 font-secondary">
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
                    className={`border-1 border-gray-300 flex items-center duration-700 ease-in-out transform transition-all h-[500px] w-3/4 rounded-2xl relative`}
                >
                    <section className={`p-5 w-full lg:w-1/2 lg:p-10 ${AuthType === "Register" ? "lg:absolute lg:animate-RegisterForm" : "lg:absolute lg:animate-LoginForm"}`}>
                        <p className={`text-center text-2xl font-semibold text-primary  ${AuthType === "Register" ? 'pt-5' : ''}`}>{AuthType === "Login" ? 'Your recipe book awaits!' : 'Fire up your apron — Join ChefHub!'}</p>
                        <form method="POST" className={`flex flex-col p-4 justify-center`} onSubmit={handleSubmit(onSubmit)}>
                            {
                                AuthType === "Login" ? 
                                    <>
                                        <label htmlFor="email" className={`auth-label after:content-['*'] after:ml-1 after:text-red-400 ${errors.email && 'text-red-400'}`}>Email</label>
                                        <input 
                                            type="email" 
                                            className={`auth-input ${errors.email && 'border-red-400'}`}
                                            { ...register('email') }
                                            placeholder='Enter your email'
                                        />
                                        {errors.email && <p className="ml-2 mt-1 text-sm text-red-400">{errors.email.message}</p> }
                                        <label htmlFor="password" className={`auth-label after:content-['*'] after:ml-1 after:text-red-400 ${errors.password && 'text-red-400'}`}>Password</label>
                                        <input 
                                            type="password" 
                                            className={`auth-input ${errors.password && 'border-red-400'}`} 
                                            { ...register('password') }
                                            placeholder="Enter your password"
                                        />
                                        {errors.password && <p className="ml-2 mt-1 text-sm text-red-400">{errors.password.message}</p> }
                                        <button type="submit"  className="auth-button md:w-3/8 mt-5" disabled={isPending}>Log in</button>
                                        <p className="mt-5">
                                            <NavLink
                                                to="forgot-password"
                                                className="text-primary font-semibold hover:underline"
                                            >Forgot Your Password?</NavLink>
                                        </p>
                                    </>
                                : 
                                    <>
                                        <label htmlFor="username" className={`auth-label max-lg:mt-0 after:content-['*'] after:ml-1 after:text-red-400 ${errors.username && 'text-red-400'}`}>Username</label>
                                        <input 
                                            type="text" 
                                            className={`auth-input ${errors.username && 'border-red-400'}`} 
                                            { ...register('username') }
                                            placeholder="Enter your name"
                                        />
                                        {errors.username && <p className="ml-2 mt-1 text-sm text-red-400">{errors.username.message}</p> }
                                        <label htmlFor="email" className={`auth-label after:content-['*'] after:ml-1 after:text-red-400 ${errors.email && 'text-red-400'}`}>Email</label>
                                        <input 
                                            type="email"  
                                            className={`auth-input ${errors.email && 'border-red-400'}`}
                                            { ...register('email') }
                                            placeholder="Enter your email"
                                        />
                                        {errors.email && <p className="ml-2 mt-1 text-sm text-red-400">{errors.email.message}</p> }
                                        <label htmlFor="password" className={`auth-label after:content-['*'] after:ml-1 after:text-red-400 ${errors.email && 'text-red-400'}`}>Password</label>
                                        <input 
                                            type="password" 
                                            className={`auth-input ${errors.password && 'border-red-400'}`}
                                            { ...register('password') }
                                            placeholder="Enter your password"
                                        />
                                        {errors.password && <p className="ml-2 mt-1 text-sm text-red-400">{errors.password.message}</p> }
                                        <button type="submit" className="auth-button w-2/5 max-sm:w-4/5 max-lg:w-2/5 max-lg:mt-2"
                                        >Join CHefHub</button>
                                    </>
                            }
                        </form>
                        {
                            error && 
                            <p className={`flex items-center gap-2 font-bold ${error?.success ? 'text-emerald-600' : 'text-red-500'}`}>
                                {
                                    error?.success 
                                    ? 
                                        <>
                                            <TbCheck />
                                            <span>{error?.message}</span>
                                        </>
                                    :
                                        <>
                                            <TbError404/>
                                            <span>{error?.message}</span>
                                        </>
                                }
                            </p>
                        }
                    </section>
                    <section className={`hidden w-1/2 h-full top-0 lg:flex flex-col justify-center items-center bg-white ${AuthType === "Register" ? "absolute animate-RegisterSection" : "absolute animate-LoginSection"}`}>
                        <video src={AuthType === "Register" ? 'Chef.mp4' : "Login.mp4"} autoPlay muted playsInline ref={videoRef} className="w-[400px] h-[400px]"></video>
                        <p className="w-4/5 text-center text-primary text-base font-semibold">{AuthType === "Register" ? 'Join our culinary community and discover amazing recipes, connect with fellow chefs, and elevate your cooking skills!' : 'Log in to explore sizzling new recipes and connect with top chefs!'}</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Auth;