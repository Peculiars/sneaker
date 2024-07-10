"use client"
import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { useSpringCarousel } from 'react-spring-carousel';
import { shoeData } from '@/app/api/productData';

import Image from 'next/image';
import Link from 'next/link';

const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(shoeData[0].id);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);


    useEffect(() => {
        const handleResize = () => {
            const smallScreen = window.innerWidth < 640;
            setItemsPerSlide(smallScreen ? 2 : 5);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem,
        useListenToCustomEvent
    } = useSpringCarousel({
        itemsPerSlide: itemsPerSlide,
        withLoop: true,
        initialStartingPosition: 'center',
        gutter: 8,
        items: shoeData.map((item) => ({
            ...item,
            renderItem: (
                <div
                key={item.id} // Ensure each item has a unique key
                className={`grid aspect-[2] w-full place-items-center text-lg text-white transition-all duration-700`}
            >
                <div className="flex flex-col items-center py-6">
                    <Link href={`/productList/${item.id}`}>
                        <Image src={item.variants[0].mainImage} alt={item.name} width={80} height={80} className="w-56 h-full rounded-lg" />
                    </Link>
                    <div className=" text-black flex flex-col py-1 w-full">
                        <Link href={`/productList/${item.id}`}>
                            <p className={`${currentSlide === item.id ? ' text-[#141414]' : 'text-[#14141480] font-medium'} text-xs`}>{item.name}</p>
                        </Link>
                        <p className={`${currentSlide === item.id ? ' text-[#141414]' : 'text-[#14141480]'} text-xs`}>{item.category}</p>
                        <p className={`${currentSlide === item.id ? ' text-[#141414]' : 'text-[#14141480]'} text-xs`}>{item.variants[0].color}</p>
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
            <div className='xs:px-[12px] md:px-[64px] max-w-screen-xl h-full flex justify-between w-full'>
                <h2 className="uppercase font-[700] font-archivo text-[24px] text-[#2E2E2E]">best sellers</h2>
                <div className='xs:hidden md:flex gap-3'>
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
