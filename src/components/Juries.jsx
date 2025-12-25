export default function Juries() {
  return (
    <section className="flex items-center justify-center py-20">
      <div className="grid grid-cols-4 md:grid-cols-12 w-full max-w-7xl">

        {/* Heading */}
        <div className="col-span-4 md:col-span-12 flex justify-center">
          <h2 className="shadow-lg p-4 w-64 md:w-96 shadow-black bg-secondary rounded-full 
            text-primary font-bold text-xl md:text-3xl mb-16 text-center
            hover:scale-105 transition-transform">
            Jury's Panel
          </h2>
        </div>

        {/* Cards */}
        <div className="col-span-4 md:col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">

          {/* Card 1 */}
          <article className="relative group rounded-xl overflow-hidden shadow-xl">
            <img
              src="/public/images/juries/rasheed.png"
              alt="Unais K"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t
              from-black/80 via-black/40 to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500" />

            {/* Name */}
            <div className="absolute bottom-6 left-0 right-0 text-center
              opacity-0 translate-y-4
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-500">
              <h3 className="text-white text-xl font-bold tracking-wide">
                Rasheed Hudawi Elamkulam
              </h3>
            </div>
          </article>

          {/* Card 2 */}
          <article className="relative group rounded-xl overflow-hidden shadow-xl">
            <img
              src="/public/images/juries/Shafi.png"
              alt="Ahmed Rahman"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="text-white text-xl font-bold">
                Shafi Hudawi Chengara
              </h3>
            </div>
          </article>

          {/* Card 3 */}
          <article className="relative group rounded-xl overflow-hidden shadow-xl">
            <img
              src="/public/images/juries/Noorudheen.png"
              alt="Fathima Noor"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="text-white text-xl font-bold">
                Noorudheen Hudawi Padoli
              </h3>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
