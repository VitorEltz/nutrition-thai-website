import React from 'react';
import { MessageSquare } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <MessageSquare className="text-green-600 mb-4" />
      <p className="text-gray-600 mb-4">{quote}</p>
      <p className="font-bold">{author}, {role}</p>
    </div>
  );
}
