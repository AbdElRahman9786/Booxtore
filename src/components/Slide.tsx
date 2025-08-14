

import img from '../assets/images/VVKYgjkAcUFuq7Dj3KUPJHKmiBluprQbf61syspG.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import 'swiper/css/bundle';
export const Slide = () => {
  return (
    
     
        <div className=' rounded-lg border-1 boreder-[rgb(64 140 123)] overflow-hidden'>
          <div className='relative overflow-hidden'>

        <img src={img} alt='this book img' className=' border-b-1 boreder-[#b2ddd0] rounded-lg hover:scale-105 duration-150 overflow-hidden peer '/>
        <div className='absolute w-full  left-0 right-0 bottom-0 bg-white p-6 translate-y-[100%] peer-hover:translate-y-0 duration-150'>
          <div className='flex items-center justify-center gap-2'>
            <div className='bg-[#408c7b] text-white text-center p-2  rounded-full'>
            <AddCircleOutlineIcon />
            </div>
            <div className='bg-[#408c7b] text-white text-center p-2  rounded-full'>
<RemoveCircleOutlineIcon/>
            </div>
            <div className='bg-[#408c7b] text-white text-center p-2  rounded-full'>
            <VisibilityIcon/>
            </div>
          </div>
        </div>
        </div>
        <div className='p-4 text-end'>
          <h3>اسم الكتاب </h3>
          <p>وصف الكتاب</p>
          <p>سعر الكتاب</p>
          <div className='flex items-center justify-between '>
            <button className='bg-[#408c7b] text-white px-4 py-2 rounded'>قراءة المزيد</button>
          <p>تقيم الكتاب</p>
        </div>
          </div>
        </div>
        
    
        
  )
}
