export default function Rounds() {
    return (
        <div className="min-h-screen flex items-start justify-center">
            <div className="grid grid-cols-1 gap-8 m-5 md:m-20">
                
                {/* Round 1 */}
                <div className="space-y-8">
                    <div className="flex justify-center col-span-1">
                        <h2 className="p-3 text-lg text-primary rounded-lg font-bold bg-[#FFFDEE] transition-transform duration-300 hover:scale-105">
                            Ground Zero
                        </h2>
                    </div>
                    <p className="text-center text-[#FFFDEE] max-w-2xl">
                        <span className="font-bold ">The elimination round:</span> A quiz round designed like a reality show which includes some written tasks and off-stage evaluations.
                        It checks how clearly you think, how deeply you analyze, and how prepared you are intellectually.
                    </p>
                </div>

                {/* Round 2 */}
                <div className="space-y-8">
                    <div className="flex justify-center col-span-1">
                        <h2 className="p-3 text-lg text-primary rounded-lg font-bold bg-[#FFFDEE] transition-transform duration-300 hover:scale-105">
                            Verbal Stand
                        </h2>
                    </div>
                    <p className="text-center text-[#FFFDEE] max-w-2xl">
                        <span className="font-bold ">The second round:</span>A 4-minute spontaneous academic talk followed by jury 
                        questions. This round exposes who can think fast, speak clearly, and defend ideas on a topic given just 10 minutes
                        earlier.
                    </p>
                </div>

                {/* Round 3 */}
                <div className="space-y-8">
                    <div className="flex justify-center col-span-1">
                        <h2 className="p-3 text-lg text-primary rounded-lg font-bold bg-[#FFFDEE] transition-transform duration-300 hover:scale-105">
                            Final Standpoint
                        </h2>
                    </div>
                    <p className="text-center text-[#FFFDEE] max-w-2xl">
                        <span className="font-bold ">The final round:</span> 1-vs-1 debate chosen from the 15 previously given topics.
                        Two finalists face off in pure argumentative combat to decide the ultimate champion.
                    </p>
                </div>

            </div>
        </div>
    )
}