import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = ()=>{
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/register`,{
                first_name:firstname,
                last_name:lastname,
                email:email,
                password:password
            });
            const { success , message } = response.data;
            if(success){
                console.log(message);
                navigate('/login');
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <form>
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit" onClick={handleRegister}>Register</button>
            </form>
        </>
    )
}

export default Register;