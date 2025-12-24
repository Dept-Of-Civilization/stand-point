export default function Prizes() {
  return (
    <section className="flex flex-col items-center justify-center ">
      <h2 className="text-secondary tracking-wider font-extrabold text-6xl font-mono mb-16">
        PRIZES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">

        {/* 🥈 RUNNER UP */}
        <Podium
          title="RUNNER UP"
          amount="₹ 3,333"
          glow="shadow-blue-500/50"
          text="text-blue-400"
          height="h-48"
          order="md:order-1"
        />

        {/* 🥇 CHAMPION */}
        <Podium
          title="CHAMPION"
          amount="₹ 4,444"
          glow="shadow-yellow-400/70"
          text="text-yellow-400"
          height="h-64"
          order="md:order-2"
          highlight
        />

        {/* 🥉 2ND RUNNER UP */}
        <Podium
          title="2ND RUNNER UP"
          amount="₹ 2,222"
          glow="shadow-orange-400/60"
          text="text-orange-400"
          height="h-40"
          order="md:order-3"
        />

      </div>
    </section>
  )
}

/* 🔹 Reusable Podium Component */
function Podium({ title, amount, glow, text, height, order, highlight }) {
  return (
    <div className={`flex flex-col items-center justify-end ${order}`}>

      {/* Prize Card */}
      <div
        className={`w-[220px] h-[220px] rounded-full bg-black
        flex flex-col items-center justify-center
        shadow-2xl ${glow}
        ${highlight ? "scale-110" : ""}
        transition-transform duration-300
        animate-pulse hover:animate-bounce
        `}
      >
        <h3 className={`text-xl font-bold ${text}`}>{title}</h3>
        <p className={`text-4xl font-extrabold mt-3 ${text}`}>{amount}</p>
      </div>

      {/* Podium Base */}
      <div
        className={`w-[240px] ${height} mt-6 rounded-xl
        bg-gradient-to-t from-black to-transparent`}
      />
    </div>
  )
}
