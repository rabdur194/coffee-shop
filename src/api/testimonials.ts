import api from "../lib/axios";
import type { Testimonial } from "../types/testimonial";
const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Coffee Enthusiast",
    content:
      "The Ethiopian Yirgacheffe is incredible. Bright, floral, and perfectly roasted. I’ve never tasted coffee this good at home.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Cafe Owner",
    content:
      "We switched to Coffee Aroma for our shop. Customers constantly ask what beans we’re using. Quality is consistently excellent.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Home Barista",
    content:
      "Freshness makes such a difference. The beans arrive within days of roasting and the flavor notes are exactly as described.",
    rating: 5,
  },
];

export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response = await api.get("/testimonials");
    if (Array.isArray(response.data)) {
      return response.data;
    }
    console.warn("API returned invalid data, using mock testimonials");
    return mockTestimonials;
  } catch (error) {
    console.warn("PAI not available, using mock testiomonials");
    return mockTestimonials;
  }
};
