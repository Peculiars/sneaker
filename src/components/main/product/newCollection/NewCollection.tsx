import Carousel from './Carousel'

const NewCollection = () =>{
    return(
        <section className="px-[64px] py-[19px] max-w-screen-xl h-full">
            <div className="flex flex-col items-center justify-center">
                <h2 className="uppercase text-center font-semibold">new collection</h2>
                <Carousel/>
            </div>
        </section>
    )
}

export default NewCollection