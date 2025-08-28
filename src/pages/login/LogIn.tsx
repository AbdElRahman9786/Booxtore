import {  useContext, useState } from "react";
import img from "../../assets/images/login.ebd58562113a46604e6a.png"
import Input from "../../ui/input/Input";
import { useMutation } from "@tanstack/react-query";
import  loginRequset  from "../../util/sendhttp";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import decodeToken from "../../util/tokenDecoder";
import { InfoContext } from "../../context/UserInfoContext";
import Cookies from "js-cookie";



// Define interface for login data
interface LoginData {
  email: string;
  password: string;
}



const LogIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const infoContext=useContext(InfoContext)
const navigate=useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const { mutate,isPending,isSuccess } = useMutation({
   mutationFn: (data: LoginData) => loginRequset.loginRequset(data.email, data.password),
  
    onSuccess: (data) => {
      toast('تم تسجيل الدخول بنجاح', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        if(data.token){
          Cookies.set('token',data.token)
        }
        const info=decodeToken(data.token)
        
       infoContext.setUserInfo(info)
    },
    
    onError: () => {
      toast.error('فشل تسجيل الدخول. يرجى التحقق من بيانات الاعتماد الخاصة بك.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  
  });
setTimeout(() => {  
  if(isSuccess){
    navigate('/')
  }
}, 1000);


  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    mutate({ email, password });
    
  }


 

  return (
    <>


      <div className="flex justify-between items-center min-h-screen bg-[#f3faf7]  max-md:flex-wrap rtl">
        <div className="w-1/2 p-10  ml-5 max-md:ml-0 max-md:order-2 py-20 bg-white shadow-lg rounded-lg text-right max-md:w-full">
          <h1 className="mb-10 font-bold text-3xl">:تسجيل الدخول</h1>
          <form className="min-w-full text-right" >
            <Input 
              lable="البريد الالكتروني"  
              classes="w-full mb-10 text-right" 
              name="email" 
              onChange={handleChange} 
              required
              
            />
            <br />
            <Input 
              lable="كلمه السر" 
              classes="w-full" 
              name="password" 
              onChange={handleChange} 
              required
              
            />
            <br />
            <Button 
              type="button" 
              
              className="!cursor-pointer !bg-[#facc15]  !text-white !mt-5 !border-[#facc15] !border-2 hover:!bg-white hover:!text-[#facc15] !duration-150 !px-8 !py-3 !rounded-md"
              onClick={handleLogin}
              loading={isPending}
            >
              {!isPending&& "تسجيل الدخول"}
            </Button>
          </form>
          <p className="mt-5 text-sm">ليس لديك حساب؟ <a href="#" className="text-[#facc15]">انشاء حساب</a></p>
        </div>
        <div className="max-md:w-full h-fullmax-md:order-1 max-md:h-auto">
          <img src={img} alt="Book Collection" className="min-w-full max-md:h-1/2" />
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
    </>
  );
};

export default LogIn;