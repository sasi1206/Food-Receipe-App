import axios from "axios";


const Verify = () => {
    const handleVerify = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/get_user`,{
                withCredentials:true,
            });
            const { success , user } = response.data;
            if(success){
                document.write(JSON.stringify(user));
            }
        }catch(error){
            console.log(error);
        }
    }
  return (
    <button onClick={handleVerify}>verify</button>
  )
}

export default Verify;