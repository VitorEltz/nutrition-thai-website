import React from 'react';
import { MessageSquare } from 'lucide-react';
import { TestimonialCard } from '../ui/TestimonialCard';

const testimonials = [
  {
    quote: "Thainara's nutrition plan helped me achieve my personal best in marathon running. Her knowledge and support were invaluable.",
    author: "Michael Chen",
    role: "Marathon Runner"
  },
  {
    quote: "Working with Thainara transformed our team's approach to nutrition. We saw improved performance and recovery times.",
    author: "Coach Williams",
    role: "Professional Soccer Team"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
