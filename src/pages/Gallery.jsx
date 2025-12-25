export default function Gallery() {
  const images = [
    // phase 3

    // phase 2

    // pase 1
    "/images/gallery/phase-one/fr 1.1.jpg",
    "/images/gallery/phase-one/fr 1.2.jpg",
    "/images/gallery/phase-one/fr 1.3.jpg",
    "/images/gallery/phase-one/fr 1.4.jpg",
    "/images/gallery/phase-one/fr 1.5.jpg",
  ]

  return (
    <section className="py-20 px-6">
      
      {/* Heading */}
      <div className="flex justify-center mb-16">
        <h2 className="shadow-lg p-4 w-64 md:w-96 shadow-black bg-secondary
          rounded-full text-primary font-bold text-xl md:text-3xl text-center
          hover:scale-105 transition-transform">
          GALLERY
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <article
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img
              src={src}
              alt=""
              className="w-full h-72 object-cover
              transition-transform duration-500
              group-hover:scale-110"
            />

            {/* Dark overlay (only on hover) */}
            <div className="absolute inset-0 bg-black/40
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500" />

            {/* Download Button */}
            <a
              href={src}
              download
              className="absolute bottom-6 left-1/2 -translate-x-1/2
              opacity-0 group-hover:opacity-100
              transition-all duration-500
              px-4 py-2 rounded-full
              bg-white text-black text-sm font-bold
              hover:scale-105"
            >
              ⬇ Download
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
