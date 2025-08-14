import React from 'react'
import img from '../assets/images/logoBooxtore.76f97d147d00a1c42dfb4f372782a937.svg'
import facjebook from '../assets/images/download.png'
import tiktok from '../assets/images/tiktok_icon.8a9452a0a4c037d9de63.png'
import instagram from '../assets/images/instagram_icon.3c5c461f83cc7069a13f.png'
import whatsapp from '../assets/images/whatsapp_icon.97b90b6e3f8c70254204.png'
export const Footer = () => {
  return (
    <div className='bg-[#233341] w-screen max-w-full p-8 mt-40'>
        <div className='flex flex-col items-center justify-center text-white gap-4'>
<div>
    <img src={img} alt="logo" className=' mb-4' />
    <p>#كتبك. #بيتك. #راحتك.</p>
</div>
<div className='flex items-center justify-center pb-7 gap-3 border-b-2 border-[#1e293b]'>
<img src={facjebook} alt="facebook" className='w-[30px] mx-2 hover:scale-105 duration-150'  />
<img src={tiktok} alt="tiktok" className='w-[30px] mx-2 hover:scale-105 duration-150' />
<img src={instagram} alt="instagram" className='w-[30px] mx-2 hover:scale-105 duration-150' />
<img src={whatsapp} alt="whatsapp" className='w-[30px] mx-2 hover:scale-105 duration-150' />
</div>



        </div>
<p className='text-center mt-3.5 text-xl w-full block'><span>&lt;Developed By&gt;</span> Abd El Rahmen Ahmed &lt;All Copy Rights Reserved @2025&gt;
</p>

    </div>
  )
}
