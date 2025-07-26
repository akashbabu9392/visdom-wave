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
      className={`relative p-6 rounded-2xl h-full flex flex-col ${
        isFeatured
          ? 'bg-[#1e3a8a] text-white'
          : 'bg-white border border-gray-100 shadow-sm'
      }`}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#3b82f6] text-white text-xs font-medium px-3 py-1 rounded-full">
          Featured Review
        </div>
      )}
      
      <div className="flex items-center justify-center mb-4">
        <div 
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
            isFeatured ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-700'
          }`}
        >
          {initials}
        </div>
      </div>
      
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? isFeatured ? 'text-yellow-300 fill-yellow-300' : 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300 fill-gray-300'
            }`}
          />
        ))}
      </div>
      
      <blockquote className="text-center mb-6 flex-grow">
        <p className={`text-sm ${isFeatured ? 'text-gray-100' : 'text-gray-600'}`}>
          &ldquo;{testimonial}&rdquo;
        </p>
      </blockquote>
      
      <div className="text-center">
        <p className={`font-semibold ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </p>
        <p className={`text-sm ${isFeatured ? 'text-blue-200' : 'text-gray-500'}`}>
          {role}
        </p>
      </div>
    </div>
  );
}
