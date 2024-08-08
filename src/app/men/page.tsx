import multicolor from '../../../public/assets/images/multicolor.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { shoeData } from '@/app/api/productData';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"

const Men = () =>{
    const men = shoeData.filter(item=> item.men)
    function formatPrice(price: number): string {
        return new Intl.NumberFormat('en-NG', {
          style: 'currency',
          currency: 'NGN',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(price);
      }
    return(
        <main className='px-[64px] py-[19px] max-w-screen-xl h-full '>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className='hover:no-underline text-sm text-gray-600'>Filter & sort <MdKeyboardArrowDown/> </AccordionTrigger>
                <AccordionContent>
                    <div className='relative flex w-full border bg-gray-100 rounded-2xl justify-center items-center gap-28 py-5'> 
                    <div className='flex flex-col'>
                        <div>
                            <h2 className='font-[500] text-lg'>Gender</h2>
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="" className='flex items-center text-xs py-1'>
                                <input type="checkbox" name='men' id="" className='mx-0.5'/>Men
                            </label>
                            <label htmlFor="" className='flex items-center text-xs py-1'>
                                <input type="checkbox" name='women' id="" className='mx-0.5'/>Women
                            </label>
                            <label htmlFor="" className='flex items-center text-xs py-1'>
                                <input type="checkbox" name='kids' id="" className='mx-0.5'/>Kids
                            </label>
                            <label htmlFor="" className='flex items-center text-xs py-1'>
                                <input type="checkbox" name='unisex' id="" className='mx-0.5'/>Unisex
                            </label>
                        </div>   
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            <h2 className='text-lg font-[500]'>Colour</h2>
                        </div>
                        <div className='grid grid-cols-2 gap-5'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='flex items-center text-xs text-[#141414] py-1'>
                                <input type="checkbox" name='men' id="" /> <FaCircle className='size-3 text-blue-700 mx-0.5'/>Blue
                            </label>
                            <label htmlFor="" className='flex items-center text-xs text-[#141414] py-1'>
                                <input type="checkbox" name='women' id="" /> <FaCircle className='size-3 text-green-700 mx-0.5'/>Green
                            </label>
                            <label htmlFor="" className='flex items-center text-xs text-[#141414] py-1'>
                                <input type="checkbox" name='kids' id="" /> <FaCircle className='size-3 text-yellow-500 mx-0.5'/>Yellow
                            </label>
                            <label htmlFor="" className='flex items-center text-xs text-[#141414] py-1'>
                                <input type="checkbox" name='unisex' id="" /> <FaCircle className='size-3 text-red-700 mx-0.5'/>Red
                            </label>
                        </div>   
                        <div className='flex flex-col'>
                            <label htmlFor="" className='flex items-center text-xs text-[#141414] py-1'>
                                <input type="checkbox" name='men' id="" /> <FaCircle className='size-3 text-orange-500 mx-0.5'/>Orange
                            </label>
                            <label htmlFor="" className='flex items-center text-xs text-[#141414] py-1'>
                                <input type="checkbox" name='women' id="" /> <FaCircle className='size-3 text-gray-500 mx-0.5'/>Gray
                            </label>
                            <label htmlFor="" className='flex items-center text-xs text-[#141414] py-1'>
                                <input type="checkbox" name='kids' id="" /> <FaCircle className='size-3 text-white mx-0.5'/>White
                            </label>
                            <label htmlFor="" className='flex items-center text-xs text-[#141414] py-1'>
                                <input type="checkbox" name='unisex' id="" /> <Image src={multicolor} alt='color picker' className='mx-0.5 size-3'/>MultiColor
                            </label>
                        </div>
                        </div>
                           
                    </div>

                    <div className='flex flex-col'>
                        <div>
                            <h2 className='font-[500] text-lg'>Price</h2>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='flex items-center text-xs py-1'>
                                <input type="checkbox" name='men' id="" className='mx-0.5'/>₦ 40,000 - ₦ 100,000
                            </label>
                            <label htmlFor="" className='flex items-center text-xs py-1'>
                                <input type="checkbox" name='women' id="" className='mx-0.5'/>₦ 100,001 - ₦ 200,000
                            </label>
                            <label htmlFor="" className='flex items-center text-xs py-1'>
                                <input type="checkbox" name='kids' id="" className='mx-0.5'/>₦ 200,001 - ₦ 300,000
                            </label>
                            <label htmlFor="" className='flex items-center text-xs py-1'>
                                <input type="checkbox" name='unisex' id="" className='mx-0.5'/>Over ₦ 300,000
                            </label>
                        </div>   
                    </div>

                    <div className='flex flex-col'>
                        <div>
                            <h2 className='font-[500] text-lg'>Sort by</h2>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='flex items-center text-xs py-1'>
                                <input type="checkbox" name='men' id="" className='mx-0.5'/>Best sellers
                            </label>
                            <label htmlFor="" className='flex items-center text-xs py-1'>
                                <input type="checkbox" name='women' id="" className='mx-0.5'/>New Collections
                            </label>
                            <label htmlFor="" className='flex items-center text-xs py-1'>
                                <input type="checkbox" name='kids' id="" className='mx-0.5'/>High - Low
                            </label>
                            <label htmlFor="" className='flex items-center text-xs py-1'>
                                <input type="checkbox" name='unisex' id="" className='mx-0.5'/>Low - High
                            </label>
                        </div>   
                    </div>

                    <div className='absolute top-1 right-3'>
                        <AccordionTrigger className='hover:no-underline'>
                            <span className='flex items-center text-sm text-gray-500 cursor-pointer'>Close <IoIosClose className='w-5 h-5'/></span>
                        </AccordionTrigger>
                    </div>

                </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className='grid grid-cols-3 gap-5'>
                {men.map((item)=>(
                    <div key={item.id} className='py-3'>
                        <Link href={`/productList/${item.id}`} className=''>
                            <Image className='rounded-md !w-[23rem] !h-[25rem]' width={100} height={50} src={item.variants[0].mainImage} alt={item.name}/>
                        </Link>  
                        <div>
                            <Link href={`/productList/${item.id}`}><p>{item.name}</p></Link>
                            <p>{item.category}</p>
                            <p>{item.variants[0].color}</p>
                            <p>{formatPrice(item.price / 1)}</p>
                        </div>    
                    </div>
                ))}
            </div>
            <div className='w-full text-center my-7'>   
                <button className='border-2 border-black hover:bg-black hover:text-white duration-500 rounded-full px-6 py-1'>Load more</button>
            </div>
        </main>
    )
}

export default Men