export default function Hero() {
    return (
        <div className="flex mt-10 md:h-0 items-start lg:items-center justify-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <h1 className="col-span-2 text-white text-xl md:text-3xl text-center mb-6 md:tracking-[0.2em] selection:text-[#FFFDEE] font-light">Intellectual Excellence Championship</h1>
                
                <div className="flex col-span-2 justify-center">
                    <img src="/src/images/stand-point.png" alt="" className="object-cover  md:h-[400px] w-[400px] md:w-[910px]" />
                </div>

                <h2 className="text-center col-span-2 text-white font-light mt-5 tracking-widest md:tracking-[0.5em]">Discover | Debate | Develop</h2>

                <div className="flex  col-span-1 justify-center mt-10 md:mt-20 gap-2">
                    <button className="text-primary p-2 text-2xl md:p-4 md:text-3xl tracking-widest font-extrabold bg-[#FFFDEE] ">22</button>
                    <button className="text-primary p-2 text-2xl md:p-4 md:text-3xl tracking-widest font-extrabold bg-[#FFFDEE] ">23</button>
                </div>

                <div className="flex col-span-1 justify-start mt-10 md:mt-20">
                    <p className="text-[#FFFDEE] tracking-[0.2em] font-bold text-2xl">December 2025 <br /> Monday Tuesday</p> 
                </div>
            </div>
        </div>
    )
}