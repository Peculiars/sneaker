"use client"
import React, { useState } from 'react';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { useSpringCarousel } from 'react-spring-carousel';
import image1 from '../../../../../public/assets/images/bestSellers/bestImg1.png'
import image2 from '../../../../../public/assets/images/bestSellers/bestImg2.png';
import image3 from '../../../../../public/assets/images/bestSellers/bestImg3.png';
import image4 from '../../../../../public/assets/images/bestSellers/bestImg4.png';
import image5 from '../../../../../public/assets/images/bestSellers/bestImg5.png';
import image6 from '../../../../../public/assets/images/bestSellers/bestImg6.png';
import image7 from '../../../../../public/assets/images/bestSellers/bestImg7.png';
import image8 from '../../../../../public/assets/images/bestSellers/bestImg8.png';
import Image from 'next/image';

const Carousel = () => {
    const mockItems = [
        {id: 'item-1', name: 'Surge Conduit Bioflex', image: image1, gender: 'Men’s Shoes', color: '1 colour', price: '₦ 40,540'},
        { id: 'item-2', name: 'Legacy Cipher Codebreaker', image: image2, gender: 'Men’s Shoes', color: '1 colour', price: '₦ 40,540'},
        {id: 'item-3', name: 'Apex Terrain Conqueror', image: image3, gender: 'Women’s Shoes', color: '1 colour', price: '₦ 40,540'},
        {id: 'item-4', name: 'Novaflash Pulseweave', image: image4, gender: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
        {id: 'item-5', name: 'Hypershift Chasers', image: image5, gender: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
        {id: 'item-6', name: 'Radiant Propulsion Labs', image: image6, gender: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
        {id: 'item-7', name: 'Spectral Shift Navigators', image: image7, gender: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
        {id: 'item-8', name: 'Biometric Agility Trainers', image: image8, gender: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
    ];

    const [currentSlide, setCurrentSlide] = useState(mockItems[0].id);

    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem,
        useListenToCustomEvent
    } = useSpringCarousel({
        itemsPerSlide: 5,
        withLoop: true,
        initialStartingPosition: 'center',
        gutter: 8,
        items: mockItems.map((item) => ({
            ...item,
            renderItem: (
                <div
                key={item.id} // Ensure each item has a unique key
                className={`grid aspect-[2] w-full place-items-center text-lg text-white transition-all duration-700`}
            >
                <div className="flex flex-col items-center py-6">
                    <Image src={item.image} alt={item.name} className="w-56 h-full rounded-lg" />
                    <div className=" text-black flex flex-col py-1 w-full">
                        <p className={`${currentSlide === item.id ? ' text-[#141414]' : 'text-[#14141480] font-medium'} text-xs`}>{item.name}</p>
                        <p className={`${currentSlide === item.id ? ' text-[#141414]' : 'text-[#14141480]'} text-xs`}>{item.gender}</p>
                        <p className={`${currentSlide === item.id ? ' text-[#141414]' : 'text-[#14141480]'} text-xs`}>{item.color}</p>
                        <p className={`${currentSlide === item.id ? ' text-[#141414]' : 'text-[#14141480] font-medium'} text-xs`}>{item.price}</p>
                    </div>
                </div>
            </div>
            )
        }))
    });

    useListenToCustomEvent((event) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id);
        }
    });

    return (
        <div className="py-[19px] max-w-screen-xl h-full mx-auto overflow-hidden">
            <div className='px-[64px] max-w-screen-xl h-full flex justify-between w-full'>
                <h2 className="uppercase font-semibold text-2xl">best sellers</h2>
                <div className='flex gap-3'>
                    <button onClick={slideToPrevItem} className="">
                        <BsArrowLeftCircle className='size-6'/>
                    </button>
                    <button onClick={slideToNextItem} className="">
                        <BsArrowRightCircle className='size-6'/>
                    </button>
                </div>
            </div>
            
            <div className="w-full overflow-x-hidden py-[1%] ml-[64px]">
                {carouselFragment}
            </div>
        </div>
    );
}

export default Carousel;
