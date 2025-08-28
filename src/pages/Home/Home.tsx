import img from '../../assets/images/bookCollectionHeroImg.f659d119a8bf46d65353.png'

import imgbtnicon from '../../assets/images/bookIconBtn.faf1fedc69da3b7ef43af219fb921d43.svg'
import { Slider } from '../../components/Slider'
import { Think } from '../../components/Think'
export const Home = () => {
  return (
    <>
    <div>
<div className='bg-[#f3faf7] h-screen flex justify-evenly items-center  pb-15 max-md:p-10  max-md:!flex-col max-md:items-center '>

<div className='flex flex-col justify-between items-end text-end max-md:text-center  max-md:items-center max-w-2xl gap-5 text-[#408c7b] '>
  <h1 className='font-bold text-6xl mb-1.5 '>بوك ستور <span>.نت</span></h1>
  <h2 className=' font-bold text-5xl mb-1.5'>#كتبك. #بيتك. #راحتك.</h2>
  <p className=' text-3xl mb-5'>سهولة في التصفح، تنوع في<br/> الخيارات، وسرعة في الشحن.</p>
  <button className='flex bg-[#ff7e6f] gap-1.5 p-4 rounded-md cursor-pointer hover:bg-white duration-150 border-[#ff7e6f] border-2'>خليك واحد مننا <img src={imgbtnicon} alt='btn icon'/></button>
  <h2 className='font-bold text-5xl mb-1.5'>#كتبك. #بيتك. #راحتك.</h2>
</div>
<div className=''>
  <img src={img} alt='book img' className='mx-auto block'/>
  
</div>

</div>
<Slider/>
<Think/>
</div>

    </>
    
  )
}
