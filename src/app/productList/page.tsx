import image1 from '../../../public/assets/images/newCollection/image 1.png'
import image2 from '../../../public/assets/images/newCollection/image2.png';
import image3 from '../../../public/assets/images/newCollection/image3.png';
import image4 from '../../../public/assets/images/newCollection/image4.png';
import image5 from '../../../public/assets/images/newCollection/image5.png';

import image6 from '../../../public/assets/images/bestSellers/bestImg1.png';
import image7 from '../../../public/assets/images/bestSellers/bestImg2.png';
import image8 from '../../../public/assets/images/bestSellers/bestImg3.png';
import image9 from '../../../public/assets/images/bestSellers/bestImg4.png';
import image10 from '../../../public/assets/images/bestSellers/bestImg5.png';
import image11 from '../../../public/assets/images/bestSellers/bestImg6.png';
import image12 from '../../../public/assets/images/bestSellers/bestImg7.png';
import image13 from '../../../public/assets/images/bestSellers/bestImg8.png';

import multicolor from '../../../public/assets/images/multicolor.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import Image from 'next/image';
const ProductListing = () =>{

    const productData = [
        {id: 'item-1', name: 'Zephyr Swiftstrike Pro', image: image1, category: 'Men’s Shoes', color: '1 colour', price: '₦ 140,540'},
        { id: 'item-2', name: 'Novaweave Phantom Pulse', image: image2, category: 'Men’s Shoes', color: '3 colours', price: '₦ 100,540'},
        {id: 'item-3', name: 'Atlas Ascent GTX', image: image3, category: 'Women’s Shoes', color: '4 colours', price: '₦ 260,000'},
        {id: 'item-4', name: 'Hyperflight Terraform X', image: image4, category: 'Kid’s Shoes', color: '4 colours', price: '₦ 60,000'},
        {id: 'item-5', name: 'Eclipse Shadowstrike SE', image: image5, category: 'Kid’s Shoes', color: '3 colours', price: '₦ 90,000'},
        {id: 'item-6', name: 'Surge Conduit Bioflex', image: image6, category: 'Men’s Shoes', color: '1 colour', price: '₦ 40,540'},
        { id: 'item-7', name: 'Legacy Cipher Codebreaker', image: image7, category: 'Men’s Shoes', color: '1 colour', price: '₦ 40,540'},
        {id: 'item-8', name: 'Apex Terrain Conqueror', image: image8, category: 'Women’s Shoes', color: '1 colour', price: '₦ 40,540'},
        {id: 'item-9', name: 'Novaflash Pulseweave', image: image9, category: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
        {id: 'item-10', name: 'Hypershift Chasers', image: image10, category: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
        {id: 'item-11', name: 'Radiant Propulsion Labs', image: image11, category: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
        {id: 'item-12', name: 'Spectral Shift Navigators', image: image12, category: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
        {id: 'item-13', name: 'Biometric Agility Trainers', image: image13, category: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
    ];
    return(
        <main className='px-[64px] py-[19px] max-w-screen-xl h-full '>
            <div className='flex gap-4'>
                <span className='flex items-center text-sm text-gray-500 cursor-pointer'>Filter & sort <MdKeyboardArrowDown className='w-5 h-5'/></span>
                <span className='flex items-center text-sm text-gray-500 cursor-pointer'>Clear all <IoIosClose className='w-5 h-5'/></span>
            </div>

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

                    <div className='absolute top-5 right-3'>
                        <span className='flex items-center text-sm text-gray-500 cursor-pointer'>Close <IoIosClose className='w-5 h-5'/></span>
                    </div>
            </div>
            

            <div className='grid grid-cols-3 gap-5'>
                {productData.map((item)=>(
                    <div className='py-3' key={item.id}>
                        <div className='w-[23rem]'>
                            <Image className='rounded-md' src={item.image} alt={item.name}/>
                        </div>  
                        <div>
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{item.color}</p>
                            <p>{item.price}</p>
                        </div>    
                    </div>
                ))}
            </div>
        </main>
    )
}

export default ProductListing