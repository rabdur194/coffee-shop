import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import api from "../../lib/axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //--Before Backend---
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // For now just show success message
  //   // Later you will send this data to your Node.js backend
  //   console.log("Form submitted:", formData);
  //   setIsSubmitted(true);

  //   // Reset form
  //   setFormData({ name: "", email: "", message: "" });

  //   // Hide success message after 3 seconds
  //   setTimeout(() => setIsSubmitted(false), 3000);
  // };

  //--After-Backend---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/contact", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error: any) {
      console.error("CONTACT ERROR:", error);
      console.error("RESPONSE:", error.response?.data);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-coffee-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-coffee-900/30 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-coffee-400 font-medium tracking-wide uppercase text-sm mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-coffee-50 mb-6">
            Contact <span className="text-gradient">us</span>
          </h2>
          <p className="text-lg text-coffee-300/80 leading-relaxed">
            Have a question about our beans, wholesale, or shipping? We’d love
            to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-coffee-800 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-coffee-300" />
              </div>
              <div>
                <h3 className="font-semibold text-coffee-100 mb-1">Email</h3>
                <p className="text-coffee-400">hello@coffeearoma.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-coffee-800 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-coffee-300" />
              </div>
              <div>
                <h3 className="font-semibold text-coffee-100 mb-1">Phone</h3>
                <p className="text-coffee-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-coffee-800 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-coffee-300" />
              </div>
              <div>
                <h3 className="font-semibold text-coffee-100 mb-1">Location</h3>
                <p className="text-coffee-400">
                  123 Roastery Lane
                  <br />
                  Portland, OR 97201
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 sm:p-8 rounded-2xl bg-coffee-900/50 border border-coffee-800">
            {isSubmitted ? (
              <div className="text-center py-12">
                <p className="text-coffee-300 text-lg font-medium">
                  Thank you! Your message has been sent.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-coffee-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-coffee-950 border border-coffee-700 text-coffee-100 placeholder:text-coffee-600 focus:outline-none focus:border-coffee-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-coffee-950 border border-coffee-700 text-coffee-100 placeholder:text-coffee-600 focus:outline-none focus:border-coffee-500 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-coffee-950 border border-coffee-700 text-coffee-100 placeholder:text-coffee-600 focus:outline-none focus:border-coffee-500 transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-coffee-500 hover:bg-coffee-400 text-white font-semibold transition-all"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
