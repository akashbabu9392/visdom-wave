'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
    <main className="min-h-screen bg-[#e8e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#00334e] mb-8">Contact Us</h1>
            
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#00334e] hover:bg-[#145374] text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information & Visual */}
          <div className="space-y-8">
            {/* Company Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#00334e] mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#5588a3] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#00334e]">Corporate Office</h3>
                    <p className="text-gray-600">
                      Mumbai, Maharashtra, India<br />
                      Get in Touch Worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#5588a3] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#00334e]">Email</h3>
                    <p className="text-gray-600">hello@visdomwave.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#5588a3] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#00334e]">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="bg-[#00334e] rounded-lg p-8 h-64 flex items-center justify-center">
              <div className="w-32 h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-white text-sm">3D Visual Placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}