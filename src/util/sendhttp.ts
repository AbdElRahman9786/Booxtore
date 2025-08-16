import axios, { type AxiosResponse } from 'axios';


type LoginResponse = {
  massege: string;
  token: string;
}
async function loginRequset  (email:string, password:string)  {


await axios.post('http://localhost:5000/api/login', {
  email: email,
  password: password
}).then((response: AxiosResponse<LoginResponse>) => {
  return response.data;
}).catch((error) => {
  throw error;
});
}
async function regesterRequset  (name:string, email:string, password:string, role:string){
  await axios.post('http://localhost:5000/api/users', {name, email, password, role})
  .then((response: AxiosResponse<LoginResponse>) => {
    return response.data;
  })
  .catch((error) => {
    throw error;
  });
}

export default {loginRequset,
  regesterRequset}