
import { useQuery } from '@tanstack/react-query';
import { SearchBook } from './SearchBook';
import { getBooksRequset } from '../util/sendhttp';
type book={
    id:number;
    title:string;
    author:string;
    price:number;
    ImageUrl:string;
   
}

export default function AllBooks() {
    const query = useQuery({ queryKey: ['books'], queryFn: getBooksRequset })
    

  return (
    <div className='my-16 w-[90%] mx-auto '>
        <h3 className='text-5xl text-center font-bold mb-10'>تصفح<span className='text-[#408c7b]'> الكتب</span></h3>
        <div className='grid grid-cols-4 gap-4 items-center justify-center  max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 ovrelflow-x-hidden'>
          {query.data?.data.map((book:book)=><SearchBook key={book.id} book={book}/>)}
        
         
           
          

        </div>
    </div>
  )
}
