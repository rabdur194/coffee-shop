import { Star } from "lucide-react";
import { useTestimonials } from "../../hooks/useTestimonials";
import type { Testimonial } from "../../types/testimonial";

export default function Testimonials() {
  const { data: testimonials, isLoading, isError } = useTestimonials();

  return (
    <section id="testimonials" className="py-24 bg-coffee-950 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-coffee-900/30 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-coffee-400 font-medium tracking-wide uppercase text-sm mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-coffee-50 mb-6">
            What our <span className="text-gradient">customers</span> say
          </h2>
          <p className="text-lg text-coffee-300/80 leading-relaxed">
            Real feedback from coffee lovers who choose quality every day.
          </p>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="text-center py-16">
            <p className="text-coffee-400">Loading testimonials...</p>
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="text-center py-16">
            <p className="text-red-400">Failed to load testimonials.</p>
          </div>
        )}

        {/* Testimonials Grid */}
        {Array.isArray(testimonials) && testimonials.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((item: Testimonial) => (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-2xl bg-coffee-900/50 border border-coffee-800 hover:border-coffee-600 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-coffee-400 text-coffee-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-coffee-200 leading-relaxed mb-6">
                  “{item.content}”
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-coffee-100">{item.name}</p>
                  <p className="text-sm text-coffee-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
