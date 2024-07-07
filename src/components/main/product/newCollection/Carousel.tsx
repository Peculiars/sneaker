"use client"
import React, { useState } from 'react';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { useSpringCarousel } from 'react-spring-carousel';
import image1 from '../../../../../public/assets/images/newCollection/image 1.png'
import image2 from '../../../../../public/assets/images/newCollection/image2.png';
import image3 from '../../../../../public/assets/images/newCollection/image3.png';
import image4 from '../../../../../public/assets/images/newCollection/image4.png';
import image5 from '../../../../../public/assets/images/newCollection/image5.png';
import Image from 'next/image';

const Carousel = () => {
    const mockItems = [
        {id: 'item-1', name: 'Zephyr Swiftstrike Pro', image: image1, gender: 'Men’s Shoes', color: '1 colour', price: '₦ 140,540'},
        { id: 'item-2', name: 'Novaweave Phantom Pulse', image: image2, gender: 'Men’s Shoes', color: '3 colours', price: '₦ 100,540'},
        {id: 'item-3', name: 'Atlas Ascent GTX', image: image3, gender: 'Women’s Shoes', color: '4 colours', price: '₦ 260,000'},
        {id: 'item-4', name: 'Hyperflight Terraform X', image: image4, gender: 'Kid’s Shoes', color: '4 colours', price: '₦ 60,000'},
        {id: 'item-5', name: 'Eclipse Shadowstrike SE', image: image5, gender: 'Kid’s Shoes', color: '3 colours', price: '₦ 90,000'}
    ];

    const [currentSlide, setCurrentSlide] = useState(mockItems[0].id);

    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem,
        useListenToCustomEvent
    } = useSpringCarousel({
        itemsPerSlide: 3,
        withLoop: true,
        initialStartingPosition: 'center',
        gutter: 3,
        items: mockItems.map((item) => ({
            ...item,
            renderItem: (
                <div
                key={item.id} // Ensure each item has a unique key
                className={`grid aspect-[2] w-full place-items-center text-lg text-white transition-all duration-700 ${currentSlide === item.id
                    ? 'z-10 scale-150'
                    : 'text-[#1414144D]'
                }`}
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
        <div className="flex  py-[19px] max-w-screen-xl h-full mx-auto">
            <button onClick={slideToPrevItem} className="">
                <BsArrowLeftCircle className='size-6'/>
            </button>
            <div className="mx-auto w-[80%] overflow-x-clip py-[4%]">
                {carouselFragment}
            </div>
            <button onClick={slideToNextItem} className="">
                <BsArrowRightCircle className='size-6'/>
            </button>
        </div>
    );
}

export default Carousel;
