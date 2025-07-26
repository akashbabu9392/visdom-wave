'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Eye, EyeOff, Calendar, Camera, Mic, Check } from 'lucide-react';

// Step schemas
const step1Schema = z.object({
  mobile: z.string().min(10, 'Please enter a valid mobile number')
});

const step2Schema = z.object({
  pin: z.string().min(4, 'PIN must be 4 digits').max(4, 'PIN must be 4 digits'),
  confirmPin: z.string()
}).refine((data) => data.pin === data.confirmPin, {
  message: "PINs don't match",
  path: ["confirmPin"]
});

const step3Schema = z.object({
  parentName: z.string().min(1, 'Name is required'),
  parentSurname: z.string().min(1, 'Surname is required'),
  alternateMobile: z.string().optional(),
  email: z.string().email('Please enter a valid email'),
  address: z.string().min(1, 'Address is required'),
  country: z.string().min(1, 'Country is required'),
  state: z.string().min(1, 'State is required'),
  city: z.string().min(1, 'City is required'),
  district: z.string().min(1, 'District is required'),
  motherTongue: z.string().min(1, 'Mother tongue is required')
});

const step6Schema = z.object({
  childName: z.string().min(1, 'Child name is required'),
  dob: z.string().min(1, 'Date of birth is required'),
  gender: z.string().min(1, 'Gender is required'),
  class: z.string().min(1, 'Class is required'),
  syllabus: z.string().min(1, 'Syllabus is required'),
  schoolName: z.string().min(1, 'School name is required'),
  medium: z.string().min(1, 'Medium of instruction is required'),
  firstLanguage: z.string().min(1, 'First language is required'),
  secondLanguage: z.string().optional(),
  thirdLanguage: z.string().optional(),
  childPin: z.string().min(4, 'PIN must be 4 digits').max(4, 'PIN must be 4 digits'),
  confirmChildPin: z.string(),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to terms and conditions')
}).refine((data) => data.childPin === data.confirmChildPin, {
  message: "PINs don't match",
  path: ["confirmChildPin"]
});

type Step1Form = z.infer<typeof step1Schema>;
type Step2Form = z.infer<typeof step2Schema>;
type Step3Form = z.infer<typeof step3Schema>;
type Step6Form = z.infer<typeof step6Schema>;

export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const [formData, setFormData] = useState({});

  // Forms for different steps
  const step1Form = useForm<Step1Form>({ resolver: zodResolver(step1Schema) });
  const step2Form = useForm<Step2Form>({ resolver: zodResolver(step2Schema) });
  const step3Form = useForm<Step3Form>({ resolver: zodResolver(step3Schema) });
  const step6Form = useForm<Step6Form>({ resolver: zodResolver(step6Schema) });

  const totalSteps = 4; // Reduced from 6 to 4 steps

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onStep1Submit = (data: Step1Form) => {
    setFormData(prev => ({ ...prev, ...data }));
    nextStep();
  };

  const onStep2Submit = (data: Step2Form) => {
    setFormData(prev => ({ ...prev, ...data }));
    nextStep();
  };

  const onStep3Submit = (data: Step3Form) => {
    setFormData(prev => ({ ...prev, ...data }));
    // Skip to step 6 (which is now step 4 in the UI)
    setCurrentStep(4);
  };

  const onStep6Submit = (data: Step6Form) => {
    const finalData = { ...formData, ...data };
    console.log('Registration completed:', finalData);
    // Handle final submission
  };

  const renderProgressStepper = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
              index + 1 <= currentStep
                ? 'bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-400 border border-gray-200'
            }`}
          >
            {index + 1 <= currentStep ? <Check className="h-4 w-4" /> : index + 1}
          </div>
        ))}
      </div>
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 to-sky-400 -translate-y-1/2 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-sky-500 p-6 text-center">
            <h1 className="text-2xl font-bold text-white">Create Your Visdom Wave Account</h1>
            <p className="text-blue-100 mt-2">Join us to start your learning journey</p>
          </div>
          <div className="p-8">

          {renderProgressStepper()}

          {/* Step 1: Mobile Number */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 text-center">Get Started</h2>
              <p className="text-gray-600 text-center text-sm">We'll send you a verification code to your mobile number</p>
              
              <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">+91</span>
                    </div>
                    <input
                      {...step1Form.register('mobile')}
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="w-full pl-12 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  {step1Form.formState.errors.mobile && (
                    <p className="text-red-500 text-xs mt-1">{step1Form.formState.errors.mobile.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white py-3.5 rounded-lg font-semibold transition-all duration-200 transform hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 flex items-center justify-center space-x-2"
                >
                  <span>Continue</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </form>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                </div>
              </div>
              
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

          {/* Step 2: Parent PIN Setup */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Secure Your Account</h2>
                <p className="text-gray-600 text-sm mt-1">Create a 4-digit PIN to protect your account</p>
              </div>
              
              <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Create PIN</label>
                  <div className="relative">
                    <input
                      {...step2Form.register('pin')}
                      type={showPin ? 'text' : 'password'}
                      placeholder="Enter 4-digit PIN"
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
                  {step2Form.formState.errors.pin && (
                    <p className="text-red-500 text-xs mt-1">{step2Form.formState.errors.pin.message}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Confirm PIN</label>
                  <div className="relative">
                    <input
                      {...step2Form.register('confirmPin')}
                      type={showConfirmPin ? 'text' : 'password'}
                      placeholder="Re-enter 4-digit PIN"
                      maxLength={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent pr-12 transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPin(!showConfirmPin)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label={showConfirmPin ? 'Hide PIN' : 'Show PIN'}
                    >
                      {showConfirmPin ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {step2Form.formState.errors.confirmPin && (
                    <p className="text-red-500 text-xs mt-1">{step2Form.formState.errors.confirmPin.message}</p>
                  )}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center text-sky-600 hover:text-sky-700 font-medium transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 mr-1" /> Back
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white py-2.5 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Parent Details */}
          {currentStep === 3 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Parent Details</h2>
              <form onSubmit={step3Form.handleSubmit(onStep3Submit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        {...step3Form.register('parentName')}
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="First Name"
                      />
                    </div>
                    {step3Form.formState.errors.parentName && (
                      <p className="text-red-500 text-xs mt-1">{step3Form.formState.errors.parentName.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        {...step3Form.register('parentSurname')}
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Last Name"
                      />
                    </div>
                    {step3Form.formState.errors.parentSurname && (
                      <p className="text-red-500 text-xs mt-1">{step3Form.formState.errors.parentSurname.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      {...step3Form.register('email')}
                      type="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Email Address"
                    />
                  </div>
                  {step3Form.formState.errors.email && (
                    <p className="text-red-500 text-xs mt-1">{step3Form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <input
                      {...step3Form.register('address')}
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Full Address"
                    />
                  </div>
                  {step3Form.formState.errors.address && (
                    <p className="text-red-500 text-xs mt-1">{step3Form.formState.errors.address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Country</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <select
                        {...step3Form.register('country')}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {step3Form.formState.errors.country && (
                      <p className="text-red-500 text-xs mt-1">{step3Form.formState.errors.country.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <input
                        {...step3Form.register('state')}
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="State"
                      />
                    </div>
                    {step3Form.formState.errors.state && (
                      <p className="text-red-500 text-xs mt-1">{step3Form.formState.errors.state.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <input
                        {...step3Form.register('city')}
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="City"
                      />
                    </div>
                    {step3Form.formState.errors.city && (
                      <p className="text-red-500 text-xs mt-1">{step3Form.formState.errors.city.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">District</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <input
                        {...step3Form.register('district')}
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="District"
                      />
                    </div>
                    {step3Form.formState.errors.district && (
                      <p className="text-red-500 text-xs mt-1">{step3Form.formState.errors.district.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Mother Tongue</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <select
                        {...step3Form.register('motherTongue')}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Select Mother Tongue</option>
                        <option value="Hindi">Hindi</option>
                        <option value="English">English</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Gujarati">Gujarati</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="Punjabi">Punjabi</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {step3Form.formState.errors.motherTongue && (
                      <p className="text-red-500 text-xs mt-1">{step3Form.formState.errors.motherTongue.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#00334e] hover:bg-[#145374] text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          )}



          {/* Step 4: Child Details */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-semibold text-[#00334e] mb-6 text-center">Child Details</h2>
              <form onSubmit={step6Form.handleSubmit(onStep6Submit)} className="space-y-6">
                <div>
                  <input
                    {...step6Form.register('childName')}
                    type="text"
                    placeholder="Child Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
                  />
                  {step6Form.formState.errors.childName && (
                    <p className="text-red-500 text-sm mt-1">{step6Form.formState.errors.childName.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      {...step6Form.register('dob')}
                      type="date"
                      placeholder="Date of Birth"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
                    />
                    {step6Form.formState.errors.dob && (
                      <p className="text-red-500 text-sm mt-1">{step6Form.formState.errors.dob.message}</p>
                    )}
                  </div>
                  <div>
                    <select
                      {...step6Form.register('gender')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {step6Form.formState.errors.gender && (
                      <p className="text-red-500 text-sm mt-1">{step6Form.formState.errors.gender.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      {...step6Form.register('class')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
                    >
                      <option value="">Select Class</option>
                      <option value="1">Class 1</option>
                      <option value="2">Class 2</option>
                      <option value="3">Class 3</option>
                      <option value="4">Class 4</option>
                      <option value="5">Class 5</option>
                      <option value="6">Class 6</option>
                      <option value="7">Class 7</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                    {step6Form.formState.errors.class && (
                      <p className="text-red-500 text-sm mt-1">{step6Form.formState.errors.class.message}</p>
                    )}
                  </div>
                  <div>
                    <select
                      {...step6Form.register('syllabus')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
                    >
                      <option value="">Select Syllabus</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="State Board">State Board</option>
                    </select>
                    {step6Form.formState.errors.syllabus && (
                      <p className="text-red-500 text-sm mt-1">{step6Form.formState.errors.syllabus.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    {...step6Form.register('schoolName')}
                    type="text"
                    placeholder="School Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
                  />
                  {step6Form.formState.errors.schoolName && (
                    <p className="text-red-500 text-sm mt-1">{step6Form.formState.errors.schoolName.message}</p>
                  )}
                </div>

                <div>
                  <select
                    {...step6Form.register('medium')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
                  >
                    <option value="">Medium of Instruction</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Regional">Regional Language</option>
                  </select>
                  {step6Form.formState.errors.medium && (
                    <p className="text-red-500 text-sm mt-1">{step6Form.formState.errors.medium.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <select
                      {...step6Form.register('firstLanguage')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
                    >
                      <option value="">First Language</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Regional">Regional</option>
                    </select>
                    {step6Form.formState.errors.firstLanguage && (
                      <p className="text-red-500 text-sm mt-1">{step6Form.formState.errors.firstLanguage.message}</p>
                    )}
                  </div>
                  <div>
                    <select
                      {...step6Form.register('secondLanguage')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
                    >
                      <option value="">Second Language</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Regional">Regional</option>
                    </select>
                  </div>
                  <div>
                    <select
                      {...step6Form.register('thirdLanguage')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent"
                    >
                      <option value="">Third Language</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Regional">Regional</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      {...step6Form.register('childPin')}
                      type={showPin ? 'text' : 'password'}
                      placeholder="Child 4-digit PIN"
                      maxLength={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPin(!showPin)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPin ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                    {step6Form.formState.errors.childPin && (
                      <p className="text-red-500 text-sm mt-1">{step6Form.formState.errors.childPin.message}</p>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      {...step6Form.register('confirmChildPin')}
                      type={showConfirmPin ? 'text' : 'password'}
                      placeholder="Confirm Child PIN"
                      maxLength={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3] focus:border-transparent pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPin(!showConfirmPin)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPin ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                    {step6Form.formState.errors.confirmChildPin && (
                      <p className="text-red-500 text-sm mt-1">{step6Form.formState.errors.confirmChildPin.message}</p>
                    )}
                  </div>
                </div>

                {/* Photo and Voice Capture */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-[#e8e8e8] rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Camera className="h-12 w-12 text-[#5588a3]" />
                    </div>
                    <button
                      type="button"
                      className="bg-[#5588a3] hover:bg-[#145374] text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Capture Photo
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-[#e8e8e8] rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Mic className="h-12 w-12 text-[#5588a3]" />
                    </div>
                    <button
                      type="button"
                      className="bg-[#5588a3] hover:bg-[#145374] text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Record Voice
                    </button>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <input
                    {...step6Form.register('agreeToTerms')}
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-[#5588a3] border-gray-300 rounded focus:ring-[#5588a3]"
                  />
                  <label className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link href="#" className="text-[#5588a3] hover:text-[#00334e]">
                      Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="#" className="text-[#5588a3] hover:text-[#00334e]">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {step6Form.formState.errors.agreeToTerms && (
                  <p className="text-red-500 text-sm">{step6Form.formState.errors.agreeToTerms.message}</p>
                )}

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#00334e] hover:bg-[#145374] text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Complete Registration
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/signin" className="text-[#5588a3] hover:text-[#00334e] font-medium">
                Sign in here
              </Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}