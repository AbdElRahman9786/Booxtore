

import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../assets/images/VVKYgjkAcUFuq7Dj3KUPJHKmiBluprQbf61syspG.png'
import 'swiper/css/bundle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';



export const Slider = () => {
  
  return (
    <>
    <div className='flex p-2 bg-[#f3faf7] max-md:flex-col-reverse gap-2 max-md:items-center max-md:justify-center  mt-56 '>
      
        <div className='w-full max-w-full overflow-x-hidden '>
           <Swiper
            
      spaceBetween={10}
      slidesPerView={3}
      
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
       breakpoints={{
    0: {
      slidesPerView: 1, // 📱 mobile
    },
    640: {
      slidesPerView: 2, // tablet
    },
    1024: {
      slidesPerView: 3, // desktop
    },
  }}
    >
      <SwiperSlide>
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
        </SwiperSlide>
      <SwiperSlide>  
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
        </SwiperSlide>
      <SwiperSlide>      <div className=' rounded-lg border-1 boreder-[rgb(64 140 123)] overflow-hidden'>
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
        </div></SwiperSlide>
      <SwiperSlide>      <div className=' rounded-lg border-1 boreder-[rgb(64 140 123)] overflow-hidden'>
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
        </div></SwiperSlide>
      
    </Swiper>
        </div>
          <div className='basis-1/2 text-end max-md:basis-full max-md:mb-3.5'>
            <h2 className='text-4xl font-bold mb-5 border-l-3 border-[#f84f3b]'>اكتشف أفضل الكتب المميزة التي اخترناها لك</h2>
            <p>نوفر لك مجموعة مختارة بعناية من الكتب المميزة التي ستساعدك على التفوق في دراستك. هدفنا هو توفير وقتك من خلال تقديم أفضل الخيارات التي تناسب احتياجاتك الأكاديمية.</p>
          
           
        </div>
    </div>
    </>
  )
}
