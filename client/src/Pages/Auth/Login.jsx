import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/login`,{
                email:email,
                password:password
            },{
                withCredentials:true,
            });
            const { success , message } = response.data;
            if(success){
                console.log(message);
                navigate('/verify');
            }
        }catch(error){
            console.log(error);
        }
    }

  return (
    <form className="flex flex-col border-1">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit" onClick={handleLogin}>Login</button>
    </form>
  )
}

export default Login