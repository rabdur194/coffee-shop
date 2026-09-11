import { useMenu } from "../../hooks/useMenu";
import type { Coffee } from "../../types/menu";

export default function Menu() {
  const { data: menu, isLoading, isError, error } = useMenu();

  return (
    <section id="menu" className="py-24 bg-coffee-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-coffee-400 font-medium tracking-wide uppercase text-sm mb-3">
            Our Selection
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-coffee-50 mb-6">
            Explore our <span className="text-gradient">menu</span>
          </h2>
          <p className="text-lg text-coffee-300/80 leading-relaxed">
            Carefully selected single-origin beans, roasted weekly for peak
            freshness.
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-20">
            <p className="text-coffee-400 text-lg">Loading menu...</p>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="text-center py-20">
            <p className="text-red-400 text-lg">
              Failed to load menu. Please try again later.
            </p>
            <p className="text-coffee-500 text-sm mt-2">
              {error instanceof Error ? error.message : "Unknown error"}
            </p>
          </div>
        )}

        {/* Menu Grid */}
        {menu && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu.map((coffee: Coffee) => (
              <article
                key={coffee.id}
                className="group relative rounded-2xl overflow-hidden bg-coffee-900/50 border border-coffee-800 hover:border-coffee-600 transition-all duration-300 hover:shadow-xl hover:shadow-coffee-900/50"
              >
                {/* Top visual area */}
                <div className="h-40 bg-gradient-to-br from-coffee-800 to-coffee-950 flex items-center justify-center relative">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {coffee.emoji}
                  </span>

                  {coffee.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-coffee-500 text-white">
                      {coffee.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-coffee-100 group-hover:text-coffee-300 transition-colors">
                      {coffee.name}
                    </h3>
                    <span className="text-lg font-bold text-coffee-400 whitespace-nowrap">
                      ${coffee.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-sm text-coffee-500 mb-3">
                    {coffee.origin}
                  </p>
                  <p className="text-sm text-coffee-300/80 mb-5">
                    {coffee.notes}
                  </p>

                  <button className="w-full py-3 rounded-xl bg-coffee-800 hover:bg-coffee-600 text-coffee-100 font-medium transition-colors text-sm">
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
