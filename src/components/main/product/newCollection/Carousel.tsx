"use client"
import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { shoeData } from '@/app/api/productData';
import { useSpringCarousel } from 'react-spring-carousel';
import Image from 'next/image';
import Link from 'next/link';

const Carousel = () => {
    const newCollectionItems = shoeData.filter(item => item.newCollection);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const smallScreen = window.innerWidth < 640;
            setIsSmallScreen(smallScreen);
            setItemsPerSlide(smallScreen ? 1 : 3);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem,
        slideToItem,
        useListenToCustomEvent
    } = useSpringCarousel({
        itemsPerSlide: itemsPerSlide,
        withLoop: true,
        initialStartingPosition: isSmallScreen ? 'start' : 'center',
        gutter: 3,
        items: newCollectionItems.map((item, index) => ({
            ...item,
            renderItem: (
                <div
                key={item.id}
                className={`grid aspect-[2] w-full place-items-center xs:my-[7rem] md:my-0 text-lg text-white transition-all duration-700 ${currentSlide === index
                    ? 'md:z-10 md:scale-150'
                    : 'text-[#1414144D]'
                }`}
            >
                <div className="flex flex-col items-center xs:py-6 md:py-12 xs:overflow-hidden md:overflow-visible">
                    <Link href={`/productList/${item.id}`}>
                        <Image src={item.variants[0].mainImage} alt={item.name} width={100} height={100} className="xs:w-72 md:w-56 h-full rounded-lg" />
                    </Link>
                    <div className="flex justify-center xs:mt-4 md:hidden">
                        {newCollectionItems.map((_, index) => (
                            <button key={index} onClick={() => slideToItem(index)} className={`h-2 w-2 rounded-full mx-1 ${ currentSlide === index ? 'bg-black' : 'bg-gray-300'}`}/>
                        ))}
                    </div>
                    <div className="text-black flex flex-col xs:text-center md:text-left py-1 w-full font-satoshi">
                        <Link href={`/productList/${item.id}`}>
                            <p className={`${currentSlide === index ? 'text-[#141414]' : 'text-[#14141480] font-medium'} xs:text-sm xs:font-medium md:text-xs`}>{item.name}</p>
                        </Link>
                        <p className={`${currentSlide === index ? 'text-[#141414]' : 'text-[#14141480]'} md:text-[0.60rem] xs:text-sm leading-3`}>{item.category}</p>
                        <p className={`${currentSlide === index ? 'text-[#141414]' : 'text-[#14141480]'} md:text-[0.60rem] xs:text-sm leading-3`}>{item.variants.length} colors</p>
                        <p className={`${currentSlide === index ? 'text-[#141414]' : 'text-[#14141480] font-medium'} xs:text-sm xs:font-medium md:text-xs`}>₦ {item.price}</p>
                    </div>
                </div>
            </div>
            )
        }))
    });

    useListenToCustomEvent((event) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(newCollectionItems.findIndex(item => item.id === event.nextItem.id));
        }
    });

    return (
        <div className="flex flex-col py-[19px] max-w-screen-xl h-full mx-auto">
            <div className="flex">
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
            
        </div>
    );
}

export default Carousel;