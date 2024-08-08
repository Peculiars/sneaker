"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdMenu, MdClose } from "react-icons/md";
import logo from '../../../public/assets/images/logo.png'
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    console.log(pathName)
    return (
        
        <nav className="flex justify-between px-4 xs:px-[12px] md:px-[64px] py-[19px] max-w-screen-xl h-full bg-[#1A1A1A]">
            <Link href='/' className="size-8">
                <Image src={logo} alt="Brand Logo"/>
            </Link>
            
            <div className="hidden md:flex gap-x-4 text-sm font-normal">
                <Link href='/men' className={`font-satoshi hover:text-white hover:font-semibold text-gray-300  ${pathName === '/men' ? 'text-white active:font-bold font-bold' : ''}`}>Men</Link>
                <Link href='/women' className={`font-satoshi hover:text-white hover:font-semibold text-gray-300 ${pathName === '/women' ? 'text-white active:font-bold font-bold' : ''}`} >Women</Link>
                <Link href='/kids' className={`font-satoshi hover:text-white hover:font-semibold text-gray-300 ${pathName === '/kids' ? 'text-white active:font-bold font-bold' : ''}`}>Kids</Link>
            </div>
            
            <div className="flex text-gray-300 items-center">
                <div className="hidden md:flex border rounded-lg px-3 py-0.5 gap-x-3 items-center hover:border-white duration-300 hover:border-2">
                    <IoIosSearch className=""/>
                    <input className="bg-transparent outline-none" type="text" placeholder="Search" />
                </div>
                <div className="flex justify-evenly items-center gap-x-4 ml-5">
                    <MdOutlineShoppingBag className="size-5"/>
                    <FaRegHeart className="size-5"/>
                    <MdOutlinePersonOutline className="size-5"/>
                    <button onClick={toggleMenu} className="md:hidden">
                        {isMenuOpen ? <MdClose className="size-6" /> : <MdMenu className="size-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="absolute z-50 top-16 left-0 right-0 bg-[#1A1A1A] h-full p-4 md:hidden">
                    <div className="mt-4 flex border rounded-lg px-3 py-0.5 gap-x-3 items-center hover:border-white duration-300 hover:border-2">
                        <IoIosSearch className="text-gray-300 hover:text-white"/>
                        <input className="bg-transparent outline-none w-full" type="text" placeholder="Search" />
                    </div>
                    <div className="flex flex-col gap-y-2 mt-4 text-sm font-normal text-gray-300">
                        <Link href='/men' className="navLink">Men</Link>
                        <Link href='/' className="navLink">Women</Link>
                        <Link href='/' className="navLink">Kids</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar