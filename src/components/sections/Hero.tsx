export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-950 via-coffee-900 to-coffee-950" />

      {/* Soft glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-coffee-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <p className="text-coffee-400 font-medium tracking-wide uppercase text-sm mb-4">
              Premium Specialty Coffee
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-coffee-50 leading-tight mb-6">
              Experience the <span className="text-gradient">perfect brew</span>
            </h1>

            <p className="text-lg text-coffee-300/90 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Handcrafted single-origin coffee, roasted in small batches and
              delivered fresh. From farm to cup — pure obsession.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#menu"
                className="px-8 py-3.5 rounded-full bg-coffee-500 hover:bg-coffee-400 text-white font-semibold transition-all shadow-lg shadow-coffee-900/40 hover:shadow-coffee-500/20 hover:-translate-y-0.5 text-center"
              >
                Explore Menu
              </a>
              <a
                href="#about"
                className="px-8 py-3.5 rounded-full border border-coffee-600 text-coffee-200 hover:bg-coffee-900/50 hover:text-coffee-100 font-semibold transition-all text-center"
              >
                Our Story
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
              <div>
                <p className="text-3xl font-bold text-coffee-300">12k+</p>
                <p className="text-sm text-coffee-500 mt-1">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-coffee-300">40+</p>
                <p className="text-sm text-coffee-500 mt-1">Unique Blends</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-coffee-300">4.9★</p>
                <p className="text-sm text-coffee-500 mt-1">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow behind the circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-coffee-600/30 to-coffee-800/10 blur-2xl" />

              {/* Main circle */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-coffee-700 to-coffee-950 border border-coffee-600/30 flex items-center justify-center shadow-2xl">
                <span className="text-8xl sm:text-9xl select-none">☕</span>
              </div>

              {/* Floating badge - top */}
              <div className="absolute -top-2 -right-2 sm:right-0 px-4 py-2 rounded-2xl bg-coffee-800/90 border border-coffee-600 backdrop-blur-sm shadow-xl">
                <p className="text-xs text-coffee-400">Freshly roasted</p>
                <p className="font-semibold text-coffee-100 text-sm">
                  Every morning
                </p>
              </div>

              {/* Floating badge - bottom */}
              <div className="absolute -bottom-2 -left-2 sm:left-0 px-4 py-2 rounded-2xl bg-coffee-800/90 border border-coffee-600 backdrop-blur-sm shadow-xl">
                <p className="text-xs text-coffee-400">100% Organic</p>
                <p className="font-semibold text-coffee-100 text-sm">
                  Single origin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
