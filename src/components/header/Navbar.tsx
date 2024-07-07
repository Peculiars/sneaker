import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import Link from "next/link";

const Navbar = () =>{
    return (
        <nav className="flex justify-between px-[64px] py-[19px] max-w-screen-xl h-full bg-[#1A1A1A]">
            <div>
                <span className="text-32px text-white font-bold">SNEAKERS</span>
            </div>
            <div className="flex gap-x-4 text-sm font-normal text-gray-300">
                <Link href='/' className="hover:text-white hover:font-medium hover:transition-opacity duration-700">Men</Link>
                <Link href='/' className="hover:text-white hover:font-medium hover:transition-opacity duration-700">Women</Link>
                <Link href='/' className="hover:text-white hover:font-medium hover:transition-opacity duration-700">Kids</Link>
            </div>
            <div className="flex text-gray-300">
                <div className="flex border rounded-md px-3 py-0.5 gap-x-3 items-center">
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