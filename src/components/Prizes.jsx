export default function Prizes() {
    return (
        <div className="flex flex-col items-center justify-center mb-5 md:mb-25">
                <h2 className="text-secondary tracking-wider font-extrabold text-6xl font-mono">PRIZES</h2>
                <div className="grid grid-cols-1 md:grid-cols-3  m-10 gap-8">
                    <div className="col-span-1 bg-black p-10 w-[300px] md:w-[400px] animate-pulse rounded-lg shadow-lg shadow-[#E5E5E5] ">
                        <h1 className="text-center text-[#E5E5E5] text-4xl font-bold">RUNNER UP</h1>
                        <p className="text-center text-3xl font-bold text-[#E5E5E5] mt-4">₹ 3,333</p>
                    </div>
                    <div className="col-span-1 bg-black p-10 animate-pulse rounded-lg shadow-lg shadow-[#FFD700]">
                        <h1 className="text-center text-[#FFD700] text-4xl font-bold">CHAMPION</h1>
                        <p className="text-center text-3xl font-bold text-[#FFD700] mt-4">₹ 4,444</p>
                    </div>
                    <div className="col-span-1 bg-black p-10 animate-pulse rounded-lg shadow-lg shadow-[#E5E5E5]">
                        <h1 className="text-center text-[#E6A65C] text-4xl font-bold">2ND RUNNER UP</h1>
                        <p className="text-center text-3xl font-bold text-[#E6A65C] mt-4">₹ 2,222</p>
                    </div>
                </div>
        </div>
    )
}