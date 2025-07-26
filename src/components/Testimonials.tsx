import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow Solutions",
    content: "Ascoven delivered our IoT platform 3 months ahead of schedule. Their expertise in embedded systems and cloud integration is unmatched.",
    rating: 5,
    image: "SC"
  },
  {
    name: "Marcus Johnson",
    role: "Founder, Digital Ventures",
    content: "Working with Ascoven was a game-changer. They transformed our legacy system into a modern, scalable platform that handles 10x more traffic.",
    rating: 5,
    image: "MJ"
  },
  {
    name: "Amara Okafor",
    role: "Product Manager, InnovateLabs",
    content: "The team's attention to security and compliance helped us achieve SOC2 certification. Professional, responsive, and incredibly skilled.",
    rating: 5,
    image: "AO"
  },
  {
    name: "David Rodriguez",
    role: "CEO, GlobalTech Inc",
    content: "From mobile app to cloud infrastructure, Ascoven handled our complete digital transformation. Exceptional quality and communication.",
    rating: 5,
    image: "DR"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-gradient">Global Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about 
            working with Ascoven Technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="tech-card text-center max-w-3xl mx-auto">
                    <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-50" />
                    
                    <blockquote className="text-lg md:text-xl font-medium mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="flex items-center justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        {testimonial.image}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};