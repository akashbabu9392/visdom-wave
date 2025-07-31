'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { Eye, EyeOff, Smartphone, Camera, Mic, Lock, ChevronRight } from 'lucide-react';
import './animations.css';

const mobileSchema = z.object({
  mobile: z.string().min(10, 'Please enter a valid mobile number'),
  pin: z.string().min(4, 'PIN must be 4 digits').max(4, 'PIN must be 4 digits')
});

type MobileForm = z.infer<typeof mobileSchema>;

export default function SignIn() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'face' | 'voice'>('mobile');
  const [showPin, setShowPin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

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
    <main className="min-h-screen bg-[#e8e8e8] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#00334e] to-[#145374] p-6 text-center">
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
                  ? 'bg-white/60 text-[#145374] shadow-md'
                  : 'text-[#00334e] hover:bg-[#e8e8e8]'
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
                <label className="text-sm font-medium text-[#145374]">Mobile Number</label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#5588a3]" />
                  <input
                    {...register('mobile')}
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  />
                </div>
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-[#145374]">PIN</label>
                  <button type="button" className="text-xs text-sky-600 hover:text-sky-700">
                    Forgot PIN?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#5588a3]" />
                  <input
                    {...register('pin')}
                    type={showPin ? 'text' : 'password'}
                    placeholder="Enter your 4-digit PIN"
                    maxLength={4}
                    className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent transition-all duration-200 backdrop-blur-sm"
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
                className="w-full bg-gradient-to-r from-[#145374] to-[#5588a3] hover:from-[#00334e] hover:to-[#145374] text-white py-3.5 rounded-lg font-semibold transition-all duration-200 transform hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#145374] focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
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
                <span className="text-[#00334e] font-medium">Or continue with</span>
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
            <div className="relative w-56 h-56 mx-auto mb-8">
              {/* Outer ring with progress */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#e8e8e8"
                  strokeWidth="4"
                />
                <circle
                  className="animate-dash"
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="302"
                  strokeDashoffset="75.5"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00334e" />
                    <stop offset="100%" stopColor="#5588a3" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Camera viewfinder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00334e] to-[#145374] opacity-90"></div>
                  <div className="absolute inset-4 border-2 border-white/30 rounded-full flex items-center justify-center">
                    <Camera className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Pulsing indicator */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="h-2 w-2 bg-red-500 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-center space-x-2 mb-4">
                {[1, 2, 3].map((step) => (
                  <div 
                    key={step}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      step === 1 ? 'w-6 bg-[#00334e]' : 'bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>
              <p className="text-gray-600 font-medium">Position your face in the circle</p>
              <p className="text-sm text-gray-500 mt-1">Make sure your face is well-lit</p>
            </div>

            <button className="w-full bg-gradient-to-r from-[#00334e] to-[#145374] hover:from-[#00263d] hover:to-[#0e3a56] text-white py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:shadow-lg hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#145374] focus:ring-opacity-50">
              Start Face Recognition
            </button>
          </div>
        )}

        {/* Voice ID Tab - Modern Design */}
        {activeTab === 'voice' && (
            <div className="text-center">
              {/* Voice ID Card */}
              <div className="relative w-72 h-72 bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl mx-auto mb-8 p-6 shadow-lg border border-white/50 overflow-hidden group">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00334e10] to-[#5588a310] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-full flex flex-col items-center justify-center">
                  {/* Voice visualization */}
                  <div className="relative w-40 h-40 mb-6 flex items-end justify-center space-x-1">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 rounded-full bg-gradient-to-t from-[#00334e] to-[#5588a3] voice-wave-bar"
                        style={{
                          height: `${8 + Math.random() * 12}px`,
                          animationDelay: `${i * 0.05}s`,
                        }}
                      />
                    ))}
                    
                    {/* Center mic icon with pulse effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isRecording 
                          ? 'bg-gradient-to-br from-[#145374] to-[#00334e] scale-110' 
                          : 'bg-gradient-to-br from-[#00334e] to-[#5588a3] group-hover:scale-105'
                      }`}>
                        <Mic className={`h-8 w-8 text-white transition-transform ${isRecording ? 'scale-110' : ''}`} />
                        {isRecording && <div className="recording-ring"></div>}
                      </div>
                    </div>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="flex items-center space-x-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                      <div className={`h-2.5 w-2.5 rounded-full ${isRecording ? 'bg-green-500 animate-pulse' : 'bg-blue-500'}`}></div>
                      <span className="text-xs font-medium text-[#145374]">
                        {isRecording ? 'Listening...' : 'Ready to listen'}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-100 rounded-full opacity-20"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
              </div>
              
              <div className="mb-8 px-4">
                <h3 className="text-2xl font-bold text-[#00334e] mb-3">Voice Authentication</h3>
                <p className="text-sm text-gray-600 mb-5">Say this phrase to verify your identity</p>
                <div className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-xl p-5 shadow-sm mb-5 transform transition-all duration-300 hover:shadow-md">
                  <p className="text-xl font-bold bg-gradient-to-r from-[#00334e] to-[#145374] bg-clip-text text-transparent mb-2">
                    &ldquo;Hello, my voice is my password&rdquo;
                  </p>
                  <p className="text-xs text-gray-500 flex items-center justify-center space-x-2">
                    <span className="inline-flex w-2 h-2 rounded-full bg-green-500"></span>
                    <span>Speak clearly into your microphone</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <button 
                  className={`w-full group relative overflow-hidden py-4 rounded-xl font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#145374] focus:ring-opacity-50 ${
                    isRecording 
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white scale-[1.02] shadow-lg' 
                      : 'bg-gradient-to-r from-[#145374] to-[#5588a3] text-white hover:from-[#00334e] hover:to-[#145374] hover:shadow-xl hover:scale-[1.02] active:scale-95'
                  }`}
                  onMouseDown={() => setIsRecording(true)}
                  onMouseUp={() => setIsRecording(false)}
                  onMouseLeave={() => setIsRecording(false)}
                  onTouchStart={() => setIsRecording(true)}
                  onTouchEnd={() => setIsRecording(false)}
                >
                  <div className="relative z-10 flex items-center justify-center space-x-2">
                    {isRecording ? (
                      <>
                        <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                        <span>Listening...</span>
                      </>
                    ) : (
                      <>
                        <Mic className="h-5 w-5 text-white/90" />
                        <span>Hold to Speak</span>
                      </>
                    )}
                  </div>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00334e] to-[#145374] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </button>
                
                <button 
                  className="w-full bg-white text-[#145374] hover:bg-gray-50 border border-gray-200 py-3.5 rounded-xl font-medium transition-all duration-300 transform hover:shadow-lg hover:scale-[1.01] active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                  onClick={() => setActiveTab('mobile')}
                >
                  Try Another Method
                </button>
              </div>
            </div>
        )}

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Don&apos;t have an account?{' '}
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