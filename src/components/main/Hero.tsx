import Image from 'next/image'
import HeroImg from '../../../public/assets/images/heroImg.png'
import Link from 'next/link'
const Hero = () =>{
    return(
        <section className="px-[64px] py-[19px] max-w-screen-xl h-full bg-[#1A1A1A] grid grid-cols-3">
            <div className=" col-span-2 w-full h-full">
                    <div className='mt-12'>
                        <h1 className=" uppercase text-white text-[80px] leading-tight font-archivo">crafted for champions. <br/> made for you!!!</h1>
                        <Link href='/productList' className='border rounded-[100px] px-6 py-2 text-gray-300 hover:bg-gray-300 hover:text-black duration-500 font-satoshi'>Our Collections</Link>
                    </div>
            </div>
            <div className='col-span-1'>
                <Image src={HeroImg} alt='sneaker image'/>
            </div>
        </section>
    )
}

export default Hero