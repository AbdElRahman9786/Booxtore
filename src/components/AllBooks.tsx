
import { useQuery } from '@tanstack/react-query';
import { SearchBook } from './SearchBook';
import { getBooksRequset } from '../util/sendhttp';


export default function AllBooks() {
    const query = useQuery({ queryKey: ['books'], queryFn: getBooksRequset })
    console.log(query.data);

  return (
    <div className='my-16 w-[90%] mx-auto '>
        <h3 className='text-5xl text-center font-bold mb-10'>تصفح<span className='text-[#408c7b]'> الكتب</span></h3>
        <div className='flex gap-4 items-center justify-center max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 '>
            <SearchBook/>
            <SearchBook/>
            <SearchBook/>
            <SearchBook/>
         
           
          

        </div>
    </div>
  )
}
