import img from '../assets/images/logoBooxtore.76f97d147d00a1c42dfb4f372782a937.svg'
import imgCart from '../assets/images/cartIcon.702e88b26f5a977c99c3.png'
import bookIcon from '../assets/images/bookicon.svg'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ScrollProgressBar from './ProgressPar';

const Navbar: React.FC = () => {
    return (
        <>
        <nav className="navbar flex justify-around items-center bg-[#f3faf7] shadow-md p-8 rtl  sticky top-0 z-50">
            <div className="flex">
                <img src={img} alt="image/logo" className='w-[100px] mr-5' />
                <ul className='flex items-center gap-4'>
                    <li><a href="/home">الاكثر مبيعا؟</a></li>
                    <li><a href="/about">احنا مين؟</a></li>
                    <li><a href="/contact">الاسئله الشائعه؟</a></li>
                </ul>
            </div>
            <ul className="flex items-center gap-4">

                <li className='hover:shadow-2xl hover:scale-105 duration-150'><a href="/contact"><img src={imgCart} alt="cart iamge" className='w-[40px] p-2 bg-[#d8efe7] rounded-2xl hover:shadow-xl duration-150' /></a></li>
                <li className='bg-[#408c7b] p-2 rounded-md border-[#b2ddd0] border-1 hover:shadow-2xl hover:scale-105 duration-150'><span className="max-md:hidden">انشئ حساب</span><PersonAddIcon/></li>
                <li className='bg-[#b2ddd0] p-2 rounded-md border-[#408c7b] border-1 hover:shadow-2xl hover:scale-105  duration-150'><a href="/about"><div className='flex gap-2'><p className="max-md:hidden">سجل دخولك</p><img src={bookIcon} alt="bookicon" /></div></a></li>
            </ul>
            
            
        
        </nav >
        <div className="w-full h-1 bg-[#b2ddd0] fixed  left-0 z-50">
        <ScrollProgressBar/>
        </div>
        </>
    );
}

export default Navbar;
