
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle';
import { Slide } from './Slide';

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
         <Slide/>
      </SwiperSlide>
       <SwiperSlide>
         <Slide/>
      </SwiperSlide>
       <SwiperSlide>
         <Slide/>
      </SwiperSlide>
       <SwiperSlide>
         <Slide/>
      </SwiperSlide>
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
