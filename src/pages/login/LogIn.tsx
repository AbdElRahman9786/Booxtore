import { useState } from "react";
import img from "../../assets/images/login.ebd58562113a46604e6a.png"
import Input from "../../ui/input/Input";
import { useMutation } from "@tanstack/react-query";
import loginRequset from "../../util/sendhttp";
import Button from "@mui/material/Button";

// Define interface for login data
interface LoginData {
  email: string;
  password: string;
}



const LogIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const { mutate,isPending } = useMutation({
   mutationFn: (data: LoginData) => loginRequset(data.email, data.password),
  });

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
              
            />
            <br />
            <Input 
              lable="كلمه السر" 
              classes="w-full" 
              name="password" 
              onChange={handleChange} 
              
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
    </>
  );
};

export default LogIn;