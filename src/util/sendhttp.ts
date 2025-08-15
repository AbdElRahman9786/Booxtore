import axios, { type AxiosResponse } from 'axios';


type LoginResponse = {
  massege: string;
  token: string;
}
 const loginRequset  = async (email:string, password:string) => {


await axios.post('http://localhost:5000/api/login', {
  email: email,
  password: password
}).then((response: AxiosResponse<LoginResponse>) => {
  return response.data;
}).catch((error) => {
  throw error;
});
}

export default loginRequset;