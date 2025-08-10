import { Link } from 'react-router-dom'
import img from '../../assets/images/register.d23626e2fa899ca31b8b.png'

const Error = () => {
  return (
    <div className='bg-[#f3faf7] flex justify-between items-center flex-wrap '>
        <div className='text-center w-full font-bold text-3xl basis-1/2 max-md:basis-full  max-md:order-2 max-md:text-center py-3'>
    <h1>404 Not Found</h1>
    <h2>عذرا ولكن هذه الصفحه غير موجوده</h2>
    <Link to="/" className='text-[#14b8a6] decoration-1 underline'>العوده الي الصفحه الرئسيه!</Link>
</div>
<div className=' max-md:order-1 max-md:w-full max-md:object-contain max-md:h-1/2 max-md:mb-6'>
    <img src={img} alt="error image" className='w-full h-screen max-md:h-2/6 object-cover' />
</div>

    </div>
  )
}

export default Error