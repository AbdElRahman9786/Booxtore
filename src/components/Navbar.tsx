import img from '../assets/images/logoBooxtore.76f97d147d00a1c42dfb4f372782a937.svg'
import imgCart from '../assets/images/cartIcon.702e88b26f5a977c99c3.png'
import bookIcon from '../assets/images/bookicon.svg'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ScrollProgressBar from './ProgressPar';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import { userContext } from '../context/usercontext';
type toggleMenuType = () => void;
const Navbar: React.FC = () => {
    const [isOpen,setIsOpen]=useState<boolean>(false);
    const userInfoContext=useContext(userContext)
    const toggleMenu:toggleMenuType = () => {
        setIsOpen((prev) => !prev);
    };
    console.log(isOpen);

    console.log(userInfoContext.userInfo)
    return (
        <>
        <nav className=" flex justify-around max-md:justify-between items-center bg-[#f3faf7] shadow-md p-8 rtl  sticky top-0 z-50">
            <div className='hidden max-md:block max-md:cursor-pointer text-[#408c7b] font-bold text-center group'>
                <MenuIcon onClick={toggleMenu}/>
            </div>
            <div className="flex">
               <Link to="/"> <img src={img} alt="image/logo" className='w-[100px] mr-5' /></Link>
                <ul className='flex items-center gap-4 max-md:hidden'>
                    <li><a href="/home">الاكثر مبيعا؟</a></li>
                    <li><a href="/about">احنا مين؟</a></li>
                    <li><a href="/contact">الاسئله الشائعه؟</a></li>
                </ul>
            </div>
            <ul className="flex items-center  gap-4">

                <li className='hover:shadow-2xl hover:scale-105 duration-150'><a href="/contact"><img src={imgCart} alt="cart iamge" className='w-[40px] p-2 bg-[#d8efe7] rounded-2xl hover:shadow-xl duration-150' /></a></li>
                <li className='bg-[#408c7b] p-2 rounded-md border-[#b2ddd0] border-1 hover:shadow-2xl hover:scale-105 duration-150 max-md:hidden'><Link to="/register"><span >انشئ حساب</span><PersonAddIcon/></Link></li>
                <li className='bg-[#b2ddd0] p-2 rounded-md border-[#408c7b] border-1 hover:shadow-2xl hover:scale-105  duration-150 max-md:hidden'><Link to="/login"><div className='flex gap-2'><p className="max-md:hidden">سجل دخولك</p><img src={bookIcon} alt="bookicon" /></div></Link></li>
            </ul>
            
            
        
        </nav >
        <div className="w-full h-1 bg-[#b2ddd0] fixed  left-0 z-50">
        <ScrollProgressBar/>
        </div>
        {isOpen && (
            <div className="fixed  left-0 w-full  h-1/3 bg-[#317062] p-5  z-50 flex flex-col items-center justify-center  ">
                <ul className="flex flex-col items-center gap-4 text-lg">
                    <li><Link to="/home" onClick={toggleMenu} >الاكثر مبيعا؟</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>احنا مين؟</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>الاسئله الشائعه؟</Link></li>
                                <li className='bg-[#408c7b] p-2 rounded-md border-[#b2ddd0] border-1 hover:shadow-2xl hover:scale-105 duration-150 max-md:hidden'><Link to="/register"><span >انشئ حساب</span><PersonAddIcon/></Link></li>
                    <li className='bg-[#b2ddd0] p-2 rounded-md border-[#408c7b] border-1 hover:shadow-2xl hover:scale-105  duration-150'><Link to="/login" onClick={toggleMenu}><div className='flex gap-2'><p>سجل دخولك</p><img src={bookIcon} alt="bookicon" /></div></Link></li>
                </ul>
                </div>
                )}
        </>
    );
}

export default Navbar;
