import axios from 'axios';

type Credentials = {
    email: string;
    password: string;
};

function useLoginAuth({credential}:{credential: Credentials}){

    const handle_login = async () => {
        try{
            const response = await axios.post('http://localhost:4001/login', credential);

            if(response.status === 200){

            }else{

            }
        }catch(err){
            console.log(err);
        }
    } 
}