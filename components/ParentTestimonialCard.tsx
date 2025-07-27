import { Star } from 'lucide-react';

interface ParentTestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  isFeatured?: boolean;
  initials: string;
}

export function ParentTestimonialCard({
  name,
  role,
  testimonial,
  rating,
  isFeatured = false,
  initials,
}: ParentTestimonialCardProps) {
  return (
    <div
      className={`relative p-8 rounded-2xl h-full flex flex-col shadow-lg border transition-all duration-300 ${
        isFeatured
          ? 'bg-gradient-to-br from-blue-700 to-blue-500 text-white border-blue-700 hover:shadow-2xl'
          : 'bg-white border-gray-100 hover:shadow-xl'
      }`}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
          Featured Review
        </div>
      )}
      <div className="flex items-center justify-center mb-4">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-md ${isFeatured ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-700'}`}>{initials}</div>
      </div>
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? (isFeatured ? 'text-yellow-300 fill-yellow-300' : 'text-yellow-400 fill-yellow-400') : 'text-gray-300 fill-gray-300'}`}
          />
        ))}
      </div>
      <blockquote className="text-center mb-6 flex-grow">
        <p className={`text-base leading-relaxed ${isFeatured ? 'text-blue-100' : 'text-gray-600'}`}>&ldquo;{testimonial}&rdquo;</p>
      </blockquote>
      <div className="text-center">
        <p className={`font-bold text-lg ${isFeatured ? 'text-white' : 'text-gray-900'}`}>{name}</p>
        <p className={`text-sm ${isFeatured ? 'text-blue-200' : 'text-gray-500'}`}>{role}</p>
      </div>
    </div>
  );
}
