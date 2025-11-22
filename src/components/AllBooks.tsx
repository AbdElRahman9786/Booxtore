
import { useQuery } from '@tanstack/react-query';
import { SearchBook } from './SearchBook';
import { getBooksRequset } from '../util/sendhttp';
import CircularProgress from '@mui/material/CircularProgress';
import Cookies from "js-cookie";

type book={
    id:number;
    title:string;
    author:string;
    price:number;
    ImageUrl:string;
   
}

export default function AllBooks() {
  const token=Cookies.get('token')
    const query = useQuery({ queryKey: ['books'], queryFn: getBooksRequset,enabled: !!token });
    
    console.log(query.isPending)

  return (
    <div className='my-16 w-[90%] mx-auto '>
        <h3 className='text-5xl text-center font-bold mb-10'>تصفح<span className='text-[#408c7b]'> الكتب</span></h3>
        <div className='grid grid-cols-4 gap-4 items-center justify-center  max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 ovrelflow-x-hidden'>
          {query.data?.data.map((book:book)=><SearchBook key={book.id} book={book}/>)}
          {query.isLoading &&<div className='w-1/3 mx-auto'> <CircularProgress color="success" /> </div>}
        
         
           
          

        </div>
    </div>
  )
}
