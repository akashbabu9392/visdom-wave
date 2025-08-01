"use client";

import { Brain, Mic, Shield, Zap, Code, Database, Globe, Cpu, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

// Define the patent data type
type Patent = {
  id: string;
  icon: string;
  title: string;
  description: string;
  extendedDescription: string;
  features: string[];
};

interface PatentDetailsProps {
  patent: Patent;
}

// Map icon names to their corresponding components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'brain': Brain,
  'mic': Mic,
  'shield': Shield,
  'zap': Zap,
  'code': Code,
  'database': Database,
  'globe': Globe,
  'cpu': Cpu
};

export default function PatentDetails({ patent }: PatentDetailsProps) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!patent) {
      // Handle case where patent is not found
      router.push('/patents');
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [patent, router]);

  if (!patent) {
    return (
      <div className="min-h-screen bg-[#e8e8e8] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#145374]"></div>
      </div>
    );
  }

  // Get the icon component based on the icon name
  const IconComponent = iconMap[patent.icon] || Brain;

  return (
    <main className="min-h-screen bg-[#e8e8e8]">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-[#00334e] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/patents" className="flex items-center text-white hover:text-[#5588a3] transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
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
                <ArrowLeft className="h-5 w-5 mr-2" />
                Return to Highlights
              </Link>
              <button className="border-2 border-white hover:bg-white hover:text-[#00334e] px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                <ExternalLink className="h-5 w-5 mr-2" />
                Explore Related Patents
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
