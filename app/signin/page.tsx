'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { Eye, EyeOff, Smartphone, Camera, Mic } from 'lucide-react';

const mobileSchema = z.object({
  mobile: z.string().min(10, 'Please enter a valid mobile number'),
  pin: z.string().min(4, 'PIN must be 4 digits').max(4, 'PIN must be 4 digits')
});

type MobileForm = z.infer<typeof mobileSchema>;

export default function SignIn() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'face' | 'voice'>('mobile');
  const [showPin, setShowPin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<MobileForm>({
    resolver: zodResolver(mobileSchema)
  });

  const onSubmit = async (data: MobileForm) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Login submitted:', data);
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-sky-500 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Welcome Back to Visdom Wave</h1>
          <p className="text-blue-100 mt-2">Sign in to continue your learning journey</p>
        </div>
        <div className="p-8">

        {/* Tab Navigation */}
        <div className="bg-sky-50 rounded-xl p-1 mb-8 grid grid-cols-3 gap-2">
          {[
            { id: 'mobile', icon: <Smartphone className="h-4 w-4" />, label: 'Mobile + PIN' },
            { id: 'face', icon: <Camera className="h-4 w-4" />, label: 'Face ID' },
            { id: 'voice', icon: <Mic className="h-4 w-4" />, label: 'Voice ID' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex flex-col items-center justify-center py-3 px-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-sky-600 shadow-sm'
                  : 'text-gray-500 hover:text-sky-600 hover:bg-sky-50'
              }`}
            >
              <span className="mb-1">{tab.icon}</span>
              <span className="text-xs">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile + PIN Tab */}
        {activeTab === 'mobile' && (
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  {...register('mobile')}
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">PIN</label>
                  <button type="button" className="text-xs text-sky-600 hover:text-sky-700">
                    Forgot PIN?
                  </button>
                </div>
                <div className="relative">
                  <input
                    {...register('pin')}
                    type={showPin ? 'text' : 'password'}
                    placeholder="Enter your 4-digit PIN"
                    maxLength={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent pr-12 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPin(!showPin)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={showPin ? 'Hide PIN' : 'Show PIN'}
                  >
                    {showPin ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.pin && (
                  <p className="text-red-500 text-xs mt-1">{errors.pin.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white py-3.5 rounded-lg font-semibold transition-all duration-200 transform hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </span>
                ) : 'Sign In'}
              </button>
            </form>

            {/* Divider with text */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </div>
        )}

        {/* Face ID Tab */}
        {activeTab === 'face' && (
          <div className="text-center">
            <div className="w-48 h-48 border-4 border-[#5588a3] rounded-full mx-auto mb-6 relative overflow-hidden">
              <div className="absolute inset-4 border-2 border-gray-300 rounded-full"></div>
              <div className="absolute inset-8 bg-[#e8e8e8] rounded-full flex items-center justify-center">
                <Camera className="h-12 w-12 text-[#5588a3]" />
              </div>
              <div className="absolute top-0 left-1/2 w-1 h-8 bg-[#5588a3] animate-pulse"></div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-[#5588a3] rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <p className="text-gray-600">Position your face in the circle</p>
            </div>

            <button className="w-full bg-[#00334e] hover:bg-[#145374] text-white py-3 rounded-lg font-semibold transition-colors mb-4">
              Start Scan
            </button>
          </div>
        )}

        {/* Voice ID Tab */}
        {activeTab === 'voice' && (
          <div className="text-center">
            <div className="w-48 h-32 bg-[#e8e8e8] rounded-lg mx-auto mb-6 flex items-center justify-center">
              <div className="flex items-end space-x-1">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 bg-[#5588a3] rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 40 + 20}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <p className="text-gray-600 mb-6">Say "Hello Visdom Wave" to authenticate</p>

            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors mb-2 flex items-center justify-center space-x-2">
              <Mic className="h-5 w-5" />
              <span>Start Recording</span>
            </button>

            <button className="w-full bg-[#00334e] hover:bg-[#145374] text-white py-3 rounded-lg font-semibold transition-colors">
              Login
            </button>
          </div>
        )}

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <Link 
              href="/signup" 
              className="text-sky-600 hover:text-sky-700 font-medium transition-colors"
            >
              Sign up here
            </Link>
          </p>
        </div>
        </div>
      </div>
    </main>
  );
}