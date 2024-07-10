import Image from 'next/image'
import sendImg from '../../../public/assets/images/sendbtn.png'
const Footer = () =>{
    return(
        <section className="xs:px-[12px] md:px-[64px] py-[24px] max-w-screen-xl h-full bg-[#1A1A1A] grid xs:grid-cols-1 md:grid-cols-2">
            <div>
                <div className='flex flex-col'>
                    <p className="uppercase text-white xs:text-[12px] md:text-[20px]">be the first to know about new products</p>
                    <div className='flex items-center pt-3'>
                        <div className='border-gray-300 outline-none flex'>
                              <input type="text" placeholder="your email address" className="bg-transparent outline-none border px-2.5 py-0.5 text-white rounded-tl-md rounded-bl-md w-60" />
                            <span className='bg-gray-300 py-1 px-3 h-8 flex items-center rounded-tr-md rounded-br-md'><Image className='size-3' src={sendImg} alt='send icon'/></span>
                        </div>
                    </div>   
                </div>
            </div>
            <div className='flex xs:flex-col xs:gap-y-4 md:flex-row justify-between mt-4'>
                <div>
                    <h3 className='uppercase text-white font-semibold'>Explore</h3>
                    <p className='text-gray-300 text-sm py-0.5'>New Colections</p>
                    <p className='text-gray-300 text-sm py-0.5'>Best Sellers</p>
                    <p className='text-gray-300 text-sm py-0.5'>Our Colections</p>
                </div>
                <div>
                    <h3 className='uppercase text-white font-semibold'>Contact us</h3>
                    <p className='text-gray-300 text-sm py-0.5'>+234 812 345 6789</p>
                    <p className='text-gray-300 text-sm py-0.5'>+234 812 345 6789</p>
                    <p className='text-gray-300 text-sm py-0.5' >+234 812 345 6789</p>
                </div>
                <div>
                    <h3 className='uppercase text-white font-semibold'>Social</h3>
                    <p className='text-gray-300 text-sm py-0.5'>Twitter</p>
                    <p className='text-gray-300 text-sm py-0.5'>Instagram</p>
                    <p className='text-gray-300 text-sm py-0.5'>TikTok</p>
                </div>
            </div>
        </section>
    )
}

export default Footer