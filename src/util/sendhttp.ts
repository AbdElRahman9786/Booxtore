import  {  type AxiosInstance, type AxiosResponse } from 'axios';
// @ts-expect-error "Cannot find module" --- IGNORE ---
import Axios from './api/base.js'
declare const Axios: AxiosInstance;

type LoginResponse = {
  massege: string;
  token: string;
}


async function loginRequset  (email:string, password:string)  {

try{
const response:AxiosResponse= await Axios.post('/login', {
  email: email,
  password: password
})


return response.data
}catch(err){
console.log(err)
}
}
async function regesterRequset  (name:string, email:string, password:string, role:string){
  await Axios.post('/users', {name, email, password, role})
  .then((response: AxiosResponse<LoginResponse>) => {
    return response.data;
  })
  .catch((error) => {
    throw error;
  });
}

export default {loginRequset,
  regesterRequset}