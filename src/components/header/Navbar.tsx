import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import logo from '../../../public/assets/images/logo.png'
import Link from "next/link";
import Image from "next/image";

const Navbar = () =>{
    return (
        <nav className="flex justify-between px-[64px] py-[19px] max-w-screen-xl h-full bg-[#1A1A1A]">
            <Link href='/' className="size-8">
                <Image src={logo} alt="Brand Logo"/>
            </Link>
            <div className="flex gap-x-4 text-sm font-normal text-gray-300">
                <Link href='/' className="navLink">Men</Link>
                <Link href='/' className="navLink">Women</Link>
                <Link href='/' className="navLink">Kids</Link>
            </div>
            <div className="flex text-gray-300">
                <div className="flex border rounded-lg px-3 py-0.5 gap-x-3 items-center hover:border-white duration-300 hover:border-2">
                    <IoIosSearch className=""/>
                    <input className=" bg-transparent outline-none" type="text" placeholder="Search" />
                </div>
                <div className="flex justify-evenly items-center gap-x-4 ml-5">
                     <MdOutlineShoppingBag className="size-5"/>
                    <FaRegHeart className="size-5"/>
                    <MdOutlinePersonOutline className="size-5"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar