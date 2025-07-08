import axios from "axios";

const handleRegister = async(username,email,password)=>{
    try{
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/register`,{
            username,
            email,
            password
        });
        const { success , message } = response.data;
        if(success){
            return message;
        }
    }catch(error){
        throw new Error(error.response?.data?.message)
    }
}

const handleLogin = async(email,password)=>{
    try{
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/login`,{
            email,
            password
        },{
            withCredentials:true,
        });
        const { success , message } = response.data;
        if(success){
            return message;
        }
    }catch(error){
        throw new Error(error.response?.data?.message);
    }
}

export { handleLogin , handleRegister }