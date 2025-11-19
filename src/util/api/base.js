
import axios from "axios";
import Cookies from "js-cookie";


const Axios = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {'Authorization': `Bearer ${Cookies.get('token')}`}
});


export default Axios;

