import img from '../assets/images/ctaImg.c658ac36b42dbe02e5b8.png'

export const Think = () => {
  return (
    <div className='flex w-full justify-between items-center   my-40  max-md:flex-col max-md:p-5 '>
        <div className='w-32 min-h-96 bg-[#b2ddd0] rounded-r-md shadow-2xl max-md:hidden'></div>
        <div className=' max-lg:mb-20'>
            <img src={img} alt='hero'/>
        </div>
        <div className='text-end max-xl:text-center max-md:mb-7 '>
            <h1 className='text-8xl font-bold mb-8 max-xl:text-4xl '  > بيتك <span className='text-[#b2ddd0]'>و مطرحك</span> </h1>
            <h3 className='text-2xl'>عشان كده عملنالك سعر شحن موحد علي اي اوردر هتطلبه</h3>
            <p className='text-[#b2ddd0] text-4xl mt-5'>#كتبك. #بيتك. #راحتك.</p>
        </div>
        <div className='w-32 min-h-96 bg-[#b2ddd0] rounded-l-md shadow-2xl max-md:hidden'></div>
    </div>
  )
}
