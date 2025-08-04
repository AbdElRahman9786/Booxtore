import img from "../../assets/images/login.ebd58562113a46604e6a.png"
import TextField from '@mui/material/TextField';
const LogIn = () => {
 

  

  return (

    <>
    <div className="flex justify-between items-center h-screen bg-[#f3faf7] rtl">
        <div className="w-1/2 p-10 ml-5 py-20 bg-white shadow-lg rounded-lg text-right">
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
        <div className="h-screen">
            <img src={img} alt="Book Collection" className="logo" />
        </div>


    </div>
    </>
  );
};
export default LogIn;