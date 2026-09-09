import { Coffee } from "lucide-react";
import { useMenu } from "../../hooks/useMenu";
import type { Coffee } from "../../types/menu";
export default function Menu() {
  const { data: menu, isLoading, isError, error } = useMenu();
  return (
    <section id="menu" className="py-24 bg-coffee-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: px-8">
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

        {isLoading && (
          <div className="text-center py-20">
            <p className="text-coffee-400 text-lg">Loading menu...</p>
          </div>
        )}
        {/* Error state */}
        {isError && (
          <div className="text-center py-20">
            <p className="text-red-400 text-lg">
              Failed to load menu. Please try again later.
            </p>
            <p className="text-coffee-500 text-sm mt-2">
              {error instanceof Error ? error.message : "Uknown error"}
            </p>
          </div>
        )}

        {/* Menu Grid */}
        {menu && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu.map((coffee: Coffee) => (
              <article
                key={coffee.id}
                className="group relative rounded-2xl overflow-hidden
               bg-coffee-900/50 border border-coffee-800
                hover:border-coffee-600 transition-all duration-300 
                hover:shadow-xl hover:shadow-coffee-900/50"
              >
                {/* top visual area */}
                <div className=""></div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
