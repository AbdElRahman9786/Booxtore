import React, { useState } from 'react'
import img from '../assets/images/jqjWIQn2zKcOj1lxhfXbKehbf2gKIihnVaeNY9aG.png'
import line from '../assets/images/abstractBreakLine.bfbd04e93bb5ee712869fafad6614166.svg'
import plus from '../assets/images/PlusIcon.6191d701fabd6a41f4cf50f6eb834011.svg'
import minuse from '../assets/images/minusIcon.ca5a5cfd4489dffdbf72559da305a7c2.svg'



export const SearchBook = () => {
        const [count, setCount] = useState<number>(0);
    function handleIncrement() {
        setCount(count + 1);
    }
    function handleDecrement() {
        setCount(count - 1);
    }
  return (
       <div className='bg-[#e5e6e8] rounded-2xl text-center p-5'>
                <img src={img} alt='books' className='w-2/3  mx-auto py-3 rounded-4xl'/>
                <p className='my-5 text-3xl text-[#317062]'>التيرم الاول - ٣ث - تاريخ - أ. احمد عادل</p>
                <img src={line} alt='line' className='w-[80%] mx-auto'/>
                <p className='my-5 text-[#6b7280]'>جغرافيا - ٣ث - أ. محمد ناصر</p>
                <img src={line} alt='line' className='w-[80%] mx-auto rotate-180 mb-7'/>
                <div className='flex justify-around items-center w-full mb-5 '>
                    <div>
                        <button className='bg-[#f2e978] p-2 rounded border '>السعر:<span>80 جنيه</span></button>
                    </div>
                    <div className='flex items-center gap-5 '>
                        <img src={minuse} alt='minuse icon' className='w-8' onClick={handleDecrement}/>
                        <span className='bg-[#317062] border px-5 rounded'>{count}</span>
                        <img src={plus} alt='pluse icon' className='w-8' onClick={handleIncrement}/>

                    </div>
                </div>
            </div> 
  )
}
