export default function Hero() {
    return (
        <div className="flex justify-center items-start lg:items-center py-10 md:py-16 lg:min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-y-6 md:gap-y-0 max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-6xl mx-auto">
                <h1 className="col-span-2 text-white text-xl md:text-3xl text-center mb-6 md:tracking-[0.2em] selection:text-secondary font-light">Intellectual Excellence Championship</h1>
                
                <div className="flex col-span-2 justify-center">
                    <img src="/images/stand-point.png" alt="" className="w-full
    max-w-sm
    sm:max-w-md
    md:max-w-lg
    lg:max-w-4xl
    object-contain" />
                </div>

                <h2 className="text-center col-span-2 text-white font-light mt-5 tracking-widest md:tracking-[0.5em]">Discover | Debate | Develop</h2>

                <div className="flex  col-span-1 justify-center mt-10 md:mt-20 gap-2">
                    <button className="text-primary p-2 text-2xl md:p-4 md:text-3xl tracking-widest font-extrabold bg-secondary ">24</button>
                    <button className="text-primary p-2 text-2xl md:p-4 md:text-3xl tracking-widest font-extrabold bg-secondary ">25</button>
                </div>

                <div className="flex col-span-1 justify-start mt-10 md:mt-20">
                    <p className="text-secondary tracking-[0.2em] font-bold text-2xl">December 2025 <br /> Wednesday, Thursday</p> 
                </div>
            </div>
        </div>
    )
}