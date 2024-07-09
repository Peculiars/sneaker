"use client"
import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { shoeData } from '@/app/api/productData';
import { useSpringCarousel } from 'react-spring-carousel';
import Image from 'next/image';
import Link from 'next/link';

const Carousel = () => {
    const newCollectionItems = shoeData.filter(item => item.newCollection);
    const [currentSlide, setCurrentSlide] = useState(newCollectionItems[0].id);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) { // sm breakpoint in Tailwind
                setItemsPerSlide(1);
            } else {
                setItemsPerSlide(3);
            }
        };

        handleResize(); // Call once to set initial state
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
        gutter: 3,
        items: newCollectionItems.map((item) => ({
            ...item,
            renderItem: (
                <div
                key={item.id}
                className={`grid aspect-[2] w-full place-items-center text-lg text-white transition-all duration-700 ${currentSlide === item.id
                    ? 'z-10 sm:scale-150'
                    : 'text-[#1414144D]'
                }`}
            >
                <div className="flex flex-col items-center py-6">
                    <Link href={`/productList/${item.id}`}>
                        <Image src={item.variants[0].mainImage} alt={item.name} width={100} height={100} className="xs:w-72 md:w-56 h-full rounded-lg" />
                    </Link>
                    <div className="text-black flex flex-col py-1 w-full font-satoshi">
                        <Link href={`/productList/${item.id}`}>
                            <p className={`${currentSlide === item.id ? 'text-[#141414]' : 'text-[#14141480] font-medium'} text-xs`}>{item.name}</p>
                        </Link>
                        <p className={`${currentSlide === item.id ? 'text-[#141414]' : 'text-[#14141480]'} text-[0.60rem] leading-3`}>{item.category}</p>
                        <p className={`${currentSlide === item.id ? 'text-[#141414]' : 'text-[#14141480]'} text-[0.60rem] leading-3`}>{item.variants.length} colors</p>
                        <p className={`${currentSlide === item.id ? 'text-[#141414]' : 'text-[#14141480] font-medium'} text-xs`}>₦ {item.price}</p>
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
        <div className="flex py-[19px] max-w-screen-xl h-full mx-auto">
            <button onClick={slideToPrevItem} className="hidden sm:block">
                <BsArrowLeftCircle className='size-6'/>
            </button>
            <div className="mx-auto w-full sm:w-[100%] md:w-[80%] overflow-x-clip py-[4%]">
                {carouselFragment}
            </div>
            <button onClick={slideToNextItem} className="hidden sm:block">
                <BsArrowRightCircle className='size-6'/>
            </button>
        </div>
    );
}

export default Carousel;