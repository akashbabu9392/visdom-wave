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

// Function to get a unique gradient based on patent ID
function getGradientForId(id: string) {
  // Create a hash from the patent ID to ensure consistent colors
  const hash = id.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  // Array of gradient colors with more variety
  const gradients = [
    'linear-gradient(90deg, #FF6B6B, #4ECDC4)',
    'linear-gradient(90deg, #45B7D1, #96E6A1)',
    'linear-gradient(90deg, #D4A5A5, #9B8FB9)',
    'linear-gradient(90deg, #FF9A8B, #FF6B95)',
    'linear-gradient(90deg, #6A11CB, #2575FC)',
    'linear-gradient(90deg, #FF6B6B, #FF8E53)',
    'linear-gradient(90deg, #00B4DB, #0083B0)',
    'linear-gradient(90deg, #8E2DE2, #4A00E0)',
    'linear-gradient(90deg, #F46B45, #EEA849)'
  ];
  
  // Return a gradient based on the hash
  return gradients[Math.abs(hash) % gradients.length];
}

export default function PatentContent({ patent }: { patent: Patent }) {
  const IconComponent = iconMap[patent.icon as keyof typeof iconMap] || Brain;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e8e8e8]">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-[#00334e] text-white shadow-lg backdrop-blur-sm bg-opacity-95">
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
      <section className="bg-gradient-to-br from-[#00334e] to-[#145374] text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-2.242 2.243L1.717.828 2.544 0h2.829zM48.97 0l-8.486 8.485L37.058 7.07 45.544 0h3.426zM11.03 0L2.544 8.485 1.414 7.355 9.9 0h1.13zM32 0l-8 8-1.414-1.414L29.172 0H32zM20 0l-1.414 1.414L16 4l1.414-1.414L20 0zM0 2.828L8.485 11.314 7.07 12.728 0 5.657V2.828zm0 5.657l11.314 11.314-1.414 1.414L0 9.9v-1.414zm60 0L48.686 19.9l-1.414-1.414L60 5.657v2.829zM0 51.8l2.243-2.242L.828 48.142 0 48.97v2.828zm60 0v-2.83l-.83.83 1.415 1.413-2.242 2.242zM34.142.83l-8.485 8.486 1.414 1.414L34.97 3.657.828 37.8l1.414 1.414L37.8 3.657 34.142.83z\' fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat'
        }}>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center transform transition-all duration-500 hover:scale-[1.01]">
            <div className="bg-[#145374] p-5 rounded-2xl mb-8 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
              <IconComponent className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center leading-tight max-w-4xl text-white">
              {patent.title}
            </h1>
            <div className="w-32 h-1.5 bg-[#5588a3] rounded-full mb-8 transform transition-all duration-300 hover:scale-x-110"></div>
            <p className="text-xl text-center max-w-3xl text-gray-100 leading-relaxed">
              {patent.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-16 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Overview Card */}
            <div className="md:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-1 rounded-full mr-3" style={{
                    background: getGradientForId(patent.id)
                  }}></div>
                  <h2 className="text-2xl font-bold" style={{
                    background: getGradientForId(patent.id),
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}>Overview</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {patent.extendedDescription}
                </p>
              </div>
            </div>

            {/* Features Card */}
            <div className="md:col-span-5">
              <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl h-full border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-1 rounded-full mr-3" style={{
                    background: getGradientForId(patent.id)
                  }}></div>
                  <h2 className="text-2xl font-bold" style={{
                    background: getGradientForId(patent.id),
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}>Key Features</h2>
                </div>
                <ul className="space-y-4">
                  {patent.features.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#145374] flex items-center justify-center mr-3 mt-0.5 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00334e]">
                        <span className="text-white text-sm font-medium">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 group-hover:text-[#145374] transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-[#00334e] to-[#145374] rounded-2xl shadow-2xl p-10 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5588a3] opacity-20 rounded-full -mt-16 -mr-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5588a3] opacity-10 rounded-full -mb-32 -ml-32"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Interested in Learning More?</h2>
              <p className="mb-8 text-gray-200 text-lg max-w-2xl mx-auto">
                Discover how our innovative patents are transforming the educational landscape
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/patents" 
                  className="bg-[#5588a3] hover:bg-white hover:text-[#00334e] px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                  Return to Highlights
                </Link>
                <Link 
                  href="/patents" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#00334e] px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Explore Related Patents
                  <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
