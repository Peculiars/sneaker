"use client"

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { shoeData } from '../../api/productData';
import Link from 'next/link';
import { CiHeart } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"

const ProductDetail = () => {
  const params = useParams();
  const id = params.id as string;
  
  // Find the shoe from shoeData based on id
  const shoe = shoeData.find(item => item.id === id);
  
  const [selectedVariant, setSelectedVariant] = useState(shoe?.variants[0]);

  if (!shoe) {
    return <div>Product not found</div>;
  }

  function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }

  return (
    <div className="px-[64px] py-[19px] max-w-screen-xl h-full">
      <div className='flex'>
        <p>{shoe.category} / </p>
        <p className="">{shoe.name}</p>
      </div>
      {/* <p className="font-semibold">${(shoe.price / 100).toFixed(2)}</p> */}
      
      <div className="flex space-x-4 my-4">
        
      </div>

      {selectedVariant && (
        <div className='grid grid-cols-2'>
          <div className='grid grid-cols-6 h-420px'>
            <div className='col-span-1'>
              <div className="grid grid-rows-6 gap-2">
                {selectedVariant.additionalImages.map((img, index) => (
                  <Image key={index} src={img} alt={`${shoe.name} in ${selectedVariant.color} - view ${index + 1}`} width={60} height={50} className="rounded-lg"/>
                ))}
              </div>
            </div>
            <div className="mb-4 col-span-5">
              <Image src={selectedVariant.mainImage} alt={`${shoe.name} in ${selectedVariant.color}`} width={350} height={500} className="rounded-lg"/>
            </div>
          </div>

          <div>
            <div>
              <h3>{shoe.name}</h3>
              <p>{shoe.category}</p>
              <p>{formatPrice(shoe.price/1)}</p>
              <p className='flex gap-1'>Colors: <span>{shoe.variants.map((variant) => (
                  <button key={variant.color} className={`w-2.5 h-2.5 mx-0.5 rounded-full ${selectedVariant?.color === variant.color ? '' : ''}`}style={{ backgroundColor: variant.color }} onClick={() => setSelectedVariant(variant)}/>))} </span></p>
              <div>
                <p>Size :</p>
              </div>
              <div>
                <p className='flex items-center gap-2'>Quantity :<FiMinus /> 1 <BsPlus /></p>
              </div>
              <div className='my-5 max-w-screen-xl flex gap-4 items-center'>
                <button className='bg-black rounded-[2rem] w-[100%] px-8 py-1 my-4 text-white'>Add to Bag</button>
                <CiHeart className='size-10'/>
              </div>
            </div>
            <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className='underline-none'>Description</AccordionTrigger>
                <AccordionContent>
                  <p>Experience the future of footwear with the Novaweave Phantom Pulse. This revolutionary sneaker boasts a never-before-seen Novaweave upper, crafted for unparalleled breathability and a featherweight feel. But the innovation doesn't stop there. A hidden "Phantom Pulse" feature adds a touch of the unexpected, whether it's a subtle illumination with movement or an adaptive technology that seamlessly conforms to your stride. The Novaweave Phantom Pulse - where cutting-edge design meets a hint of mystery.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className='underline-none'>Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <p>Experience the future of footwear with the Novaweave Phantom Pulse. This revolutionary sneaker boasts a never-before-seen Novaweave upper, crafted for unparalleled breathability and a featherweight feel. But the innovation doesn't stop there. A hidden "Phantom Pulse" feature adds a touch of the unexpected, whether it's a subtle illumination with movement or an adaptive technology that seamlessly conforms to your stride. The Novaweave Phantom Pulse - where cutting-edge design meets a hint of mystery.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className='underline-none'>Reviews</AccordionTrigger>
                <AccordionContent>
                  <p>We're passionate about getting your fresh kicks to you fast. That's why we offer a variety of shipping options to choose from at checkout, ensuring you get your new favourites exactly when you need them.</p>
                  <p>Didn't find your perfect fit? No worries! We understand that sometimes things don't work out as planned. Our hassle-free return policy allows you to return unworn items within 3 days for a full refund or exchange.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;