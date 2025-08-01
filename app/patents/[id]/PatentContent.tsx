'use client';

import { Brain, Mic, Shield, Zap, Code, Database, Globe, Cpu } from 'lucide-react';
import Link from 'next/link';

// Map icon names to their corresponding components
const iconMap = {
  'brain': Brain,
  'mic': Mic,
  'shield': Shield,
  'zap': Zap,
  'code': Code,
  'database': Database,
  'globe': Globe,
  'cpu': Cpu
} as const;

type Patent = {
  id: string;
  icon: string;
  title: string;
  description: string;
  extendedDescription: string;
  features: string[];
};

export default function PatentContent({ patent }: { patent: Patent }) {
  const IconComponent = iconMap[patent.icon as keyof typeof iconMap] || Brain;

  return (
    <main className="min-h-screen bg-[#e8e8e8]">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-[#00334e] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/patents" className="flex items-center text-white hover:text-[#5588a3] transition-colors">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Patents</span>
          </Link>
          <h1 className="text-lg sm:text-xl font-bold truncate max-w-[60%]">
            {patent.title}
          </h1>
          <div className="w-[100px]"></div> {/* Spacer for alignment */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00334e] to-[#145374] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="bg-[#145374] p-4 rounded-full mb-6">
              <IconComponent className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center leading-tight">
              {patent.title}
            </h1>
            <div className="w-24 h-1 bg-[#5588a3] rounded-full mb-6"></div>
            <p className="text-lg text-center max-w-3xl text-gray-200">
              {patent.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#00334e] mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              {patent.extendedDescription}
            </p>
          </div>

          {/* Features List */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#00334e] mb-4">Key Features</h2>
            <ul className="space-y-3">
              {patent.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#5588a3] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-medium">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#00334e] to-[#145374] rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Interested in Learning More?</h2>
            <p className="mb-6 text-gray-200">
              Discover how our innovative patents are transforming the educational landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/patents" className="bg-[#5588a3] hover:bg-white hover:text-[#00334e] px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Return to Highlights
              </Link>
              <Link href="/patents" className="border-2 border-white hover:bg-white hover:text-[#00334e] px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Explore Related Patents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
