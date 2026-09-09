import { Flame, Leaf, Clock, Trophy } from "lucide-react";
const features = [
  {
    id: 1,
    icon: "🌱",
    title: "Ethically Sourced",
    description:
      "We partner directly with small farms across Colombia, Ethiopia, and Guatemala for fair trade beans.",
  },
  {
    id: 2,
    icon: "🔥",
    title: "Small Batch Roasting",
    description:
      "Every batch is roasted in-house with precision to unlock the unique flavor profile of each origin.",
  },
  {
    id: 3,
    icon: "⏱️",
    title: "Always Fresh",
    description:
      "Beans are roasted weekly and shipped within 48 hours so you get peak flavor every time.",
  },
  {
    id: 4,
    icon: "🏆",
    title: "Award Winning",
    description:
      "Recognized by the Specialty Coffee Association for excellence in quality and sustainability.",
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-coffee-950 relative">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-coffee-900/40 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-coffee-400 font-medium tracking-wide uppercase text-sm mb-3">
            Why Coffee Aroma
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-coffee-50 mb-6">
            Crafted with <span className="text-gradient">obsession</span>
          </h2>
          <p className="text-lg text-coffee-300/80 leading-relaxed">
            From bean selection to the final pour, every step is intentional. We
            believe great coffee starts with respect for the people and the
            land.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group p-6 sm:p-8 rounded-2xl bg-coffee-900/50 border border-coffee-800 hover:border-coffee-600 hover:bg-coffee-900/80 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-coffee-800 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-coffee-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-coffee-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
