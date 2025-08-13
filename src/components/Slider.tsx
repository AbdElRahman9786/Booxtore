

import { Swiper, SwiperSlide } from 'swiper/react';

import img from '../assets/images/VVKYgjkAcUFuq7Dj3KUPJHKmiBluprQbf61syspG.png'
import 'swiper/css/bundle';




export const Slider = () => {
  return (
    <>
    <div className='flex p-2 bg-[#f3faf7] max-md:flex-col-reverse gap-2 max-md:items-center max-md:justify-center  mt-56 '>
      
        <div className='w-full max-w-full overflow-x-hidden '>
           <Swiper
            
      spaceBetween={50}
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
        <div className=' rounded-md border-1 boreder-[#b2ddd0]'>
          <div className='relative overflow-hidden'>

        <img src={img} alt='this book img' className=' border-b-1 boreder-[#b2ddd0] rounded-md hover:scale-105 duration-150 overflow-hidden peer '/>
        <div className='absolute w-full  left-0 right-0 bottom-0 bg-white p-6 translate-y-[100%] peer-hover:translate-y-0 duration-150'>llllllllllll</div>
        </div>
        
          <h3 className='text-center'>عنوان الكتاب</h3>
          <p className='text-center'>وصف الكتاب</p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>قراءة المزيد</button>
        </div>
        </SwiperSlide>
      <SwiperSlide>  
        <div className=' rounded-md border-1 boreder-[#b2ddd0]'>
          <div className='relative overflow-hidden'>

        <img src={img} alt='this book img' className=' border-b-1 boreder-[#b2ddd0] rounded-md  hover:scale-105 hover:rounded-md duration-150 overflow-hidden peer '/>
        <div className='absolute w-full  left-0 right-0 bottom-0 bg-white p-6 translate-y-[100%] peer-hover:translate-y-0 duration-150'>llllllllllll</div>
        </div>
        
          <h3 className='text-center'>عنوان الكتاب</h3>
          <p className='text-center'>وصف الكتاب</p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>قراءة المزيد</button>
        </div>
        </SwiperSlide>
      <SwiperSlide>     <div className=' rounded-md border-1 boreder-[#b2ddd0]'>
          <div className='relative overflow-hidden'>

        <img src={img} alt='this book img' className=' border-b-1 boreder-[#b2ddd0] rounded-md hover:scale-105 duration-150 overflow-hidden peer '/>
        <div className='absolute w-full  left-0 right-0 bottom-0 bg-white p-6 translate-y-[100%] peer-hover:translate-y-0 duration-150'>llllllllllll</div>
        </div>
        
          <h3 className='text-center'>عنوان الكتاب</h3>
          <p className='text-center'>وصف الكتاب</p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>قراءة المزيد</button>
        </div></SwiperSlide>
      <SwiperSlide>    <div className=' rounded-md border-1 boreder-[#b2ddd0]'>
          <div className='relative overflow-hidden'>

        <img src={img} alt='this book img' className=' border-b-1 rounded-md boreder-[#b2ddd0] hover:scale-105 duration-150 overflow-hidden peer '/>
        <div className='absolute w-full  left-0 right-0 bottom-0 bg-white p-6 translate-y-[100%] peer-hover:translate-y-0 duration-150'>llllllllllll</div>
        </div>
        
          <h3 className='text-center'>عنوان الكتاب</h3>
          <p className='text-center'>وصف الكتاب</p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>قراءة المزيد</button>
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
