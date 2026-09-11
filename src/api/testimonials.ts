import api from "../lib/axios";
import type { Testimonial } from "../types/testimonial";
const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "sarah johgnson",
  },
];

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const response = await api.get("/testimonials");
  return response.data;
};
