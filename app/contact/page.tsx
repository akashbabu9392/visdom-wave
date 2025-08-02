'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import Loader from '@/components/ui/3d-box-loader-animation';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#e7e7e7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00334e] text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.3fr] xl:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#145374] mb-6">Send us a message</h2>
        
        {isSubmitted && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
            Thank you for your message! We&apos;ll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              {...register('name')}
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-[#23566b] rounded-md focus:outline-none focus:ring-1 focus:ring-[#23566b] bg-transparent placeholder-gray-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-[#23566b] rounded-md focus:outline-none focus:ring-1 focus:ring-[#23566b] bg-transparent placeholder-gray-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register('phone')}
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-[#23566b] rounded-md focus:outline-none focus:ring-1 focus:ring-[#23566b] bg-transparent placeholder-gray-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <textarea
              {...register('message')}
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 border border-[#23566b] rounded-md focus:outline-none focus:ring-1 focus:ring-[#23566b] bg-transparent resize-none placeholder-gray-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#145374] hover:bg-[#00334e] text-white px-8 py-3 rounded-md font-semibold transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
          </div>
          
          {/* 3D Animation */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[280px] lg:max-w-[320px] xl:max-w-md">
              <div className="scale-75 sm:scale-90 lg:scale-100">
                <Loader />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}