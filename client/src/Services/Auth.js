import axios from "axios";

const handleRegister = async(e)=>{
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
        }
    }catch(error){
        console.log(error);
    }
}

const handleLogin = async(e)=>{
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
        }
    }catch(error){
        console.log(error);
    }
}

export { handleLogin , handleRegister }