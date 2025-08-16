import {  useState } from 'react';
import img from '../../assets/images/register.d23626e2fa899ca31b8b.png'
import Input from '../../ui/input/Input'
import { useMutation } from '@tanstack/react-query';
import regesterRequset from '../../util/sendhttp';


 const Regester = () => {
  const[name,setName]=useState<string>('');
  const[email,setEmail]=useState<string>(''); 
  const[password,setPassword]=useState<string>('');
  const[role,setRole]=useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'role':
        setRole(value);
        break;
      default:
        break;
    }
  };
  type RegisterVariables = { name: string; email: string; password: string; role: string };
  const { data, mutate } = useMutation<void, unknown, RegisterVariables>({
    

    mutationFn: (data: RegisterVariables) =>
      regesterRequset.regesterRequset(data.name, data.email, data.password, data.role),
  });
    
    
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutate({ name, email, password, role });
  }
  console.log(data);
  return (
    <>
 
    <div className='flex justify-between h-full items-center max-md:flex-col'>
         <div className='flex-1 p-5 max-md:order-1 '>
        <form>
          <div className='flex gap-3  items-center justify-evenly h-full'>
          <Input lable='name' classes='w-full' name='name' onChange={(e)=>handleChange(e)}/>
          <Input lable='email' classes='w-full' name='email' onChange={(e)=>handleChange(e)}/>
          </div>
          <div className='flex gap-3 items-center justify-center h-full mt-5'>
            <Input lable='password' classes='w-full' name='password' onChange={(e)=>handleChange(e)}/>
            <Input lable='role' classes='w-full' name='role' onChange={(e)=>handleChange(e)}/>
          </div>
          <div className='flex justify-center items-center mt-5'>
            <button type='button' className='bg-[#408c7b] cursor-pointer text-white p-2 rounded-md hover:shadow-2xl hover:scale-105 duration-150' onClick={(e)=>handleSubmit(e)}>انشئ حساب</button>
          </div>
          <p className='text-center mt-5'>لديك حساب بالفعل؟ <a href="/login" className='text-[#408c7b]'>سجل دخولك</a></p>
        </form>
      </div>
      <div >
        <img src={img} alt="register image" className='w-full  object-cover ' />
      </div>
   
    </div>
    </>
  )
}

export default Regester
