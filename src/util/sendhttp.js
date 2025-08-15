import axios from 'axios';



 const loginRequset  = async (email, password) => {


await axios.post('http://localhost:5000/api/login', {
  email: email,
  password: password
} ).then((response) => {
  // handle success
  return response; 
}
).catch((error) => {
  // handle error
  console.error('There was an error!', error);
  throw error;
});
}

export default loginRequset;