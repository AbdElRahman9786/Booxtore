import React, { useContext, useState } from 'react'
import line from '../assets/images/abstractBreakLine.bfbd04e93bb5ee712869fafad6614166.svg'
import plus from '../assets/images/PlusIcon.6191d701fabd6a41f4cf50f6eb834011.svg'
import minuse from '../assets/images/minusIcon.ca5a5cfd4489dffdbf72559da305a7c2.svg'
import { cartContext } from '../context/CartContext'
import { toast, ToastContainer } from 'react-toastify'

type book={
    id:number;
    title:string;
    author:string;
    price:number;
    ImageUrl:string;
 
}

export const SearchBook = ({book} : {book: book}) => {
        const [count, setCount] = useState<number>(0);
        const cartCtx=useContext(cartContext)
        function handelAddToCart(){
           if(count== 0){
            toast.warning("please select quantity before adding to cart",{
                  position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
            });
            return;
           }
            const newarr=[...cartCtx.cartItems,{...book,quantity:count}];

            const existingItemIndex = cartCtx.cartItems.findIndex(item => item.id === book.id);
            if (existingItemIndex !== -1) {
              // Item exists, update its quantity
              const updatedCartItems = [...cartCtx.cartItems];
              updatedCartItems[existingItemIndex].quantity = count;
              cartCtx.setCartItems(updatedCartItems);
            } else {
              cartCtx.setCartItems(newarr);
            }
        }

        console.log(cartCtx.cartItems);
    function handleIncrement() {
        setCount(count + 1);
    }
    function handleDecrement() {
        setCount(count - 1);
    }
  
  return (
       <div className='bg-[#e5e6e8] rounded-2xl text-center p-5'>
                <img src={`http://localhost:5000/${book.ImageUrl}`} alt='books' className='w-2/3  mx-auto py-3 rounded-4xl'/>
                <p className='my-5 text-3xl text-[#317062]'>{book.title}</p>
                <img src={line} alt='line' className='w-[80%] mx-auto'/>
                <p className='my-5 text-[#6b7280]'>{book.author}</p>
                <img src={line} alt='line' className='w-[80%] mx-auto rotate-180 mb-7'/>
                <div className='flex justify-around items-center w-full mb-5 '>
                    <div>
                        <button className='bg-[#f2e978] p-2 rounded border '>السعر:<span>{book.price}</span></button>
                    </div>
                    <div className='flex items-center gap-5 '>
                        <button onClick={handleDecrement} disabled={count===0}>
                        <img src={minuse} alt='minuse icon' className='w-8'  />
                        </button>
                        <span className='bg-[#317062] border px-5 rounded'>{count}</span>
                        <img src={plus} alt='pluse icon' className='w-8' onClick={handleIncrement}/>

                    </div>
                    
                </div>
                <button className='bg-[#317062] text-white px-4 py-2 rounded cursor-pointer' onClick={handelAddToCart}>اضف الي السله</button>
                      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
            </div> 
  )
}
