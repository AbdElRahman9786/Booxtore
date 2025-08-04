import img from "../../assets/images/login.ebd58562113a46604e6a.png"
import TextField from '@mui/material/TextField';
const LogIn:React.FC = () => {
 

  

  return (

    <>
    <div className="flex justify-between items-center min-h-screen bg-[#f3faf7]  max-md:flex-wrap rtl">
        <div className="w-1/2 p-10  ml-5 max-md:ml-0 max-md:order-2 py-20 bg-white shadow-lg rounded-lg text-right max-md:w-full">
            <h1 className="mb-10 font-bold text-3xl">:تسجيل الدخول</h1>
            <form className="min-w-full text-right">
                
                 <TextField className="w-full mb-10 text-right"
      id="input-with-icon-adornment"
      variant="filled"
      label="البريد الالكتروني"
      margin="dense"
      dir="rtl"

     
    />
                <br />
                              <TextField className="w-full "
          id="input-with-icon-adornment"
          label="كلمه السر"
          variant="filled"
         margin="dense"
         dir="rtl"
        />
                
                
                <br />
                <button type="submit" className="cursor-pointer bg-[#facc15] text-white mt-5 border-[#facc15] border-2 hover:bg-white hover:text-[#facc15] duration-150  px-8 py-3 rounded-md">تسجيل الدخول</button>
            </form>
            <p className="mt-5 text-sm">ليس لديك حساب؟ <a href="#" className="text-[#facc15]">انشاء حساب</a></p>
        </div>
        <div className="max-md:w-full h-fullmax-md:order-1  max-md:h-auto ">
            <img src={img} alt="Book Collection"  className="min-w-full max-md:h-1/2" />
            
             
        </div>


    </div>
    </>
  );
};
export default LogIn;