import Carousel from './Carousel'

const NewCollection = () =>{
    return(
        <section className="xs:px-[12px] md:px-[64px] xs:py-[6px] md:py-[19px] max-w-screen-xl h-full">
            <div className="flex flex-col items-center justify-center">
                <h2 className="uppercase text-center text-[24px] font-archivo font-[700] text-[#2E2E2E]">new collection</h2>
                <Carousel/>
            </div>
        </section>
    )
}

export default NewCollection