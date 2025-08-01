"use client";

import { Brain, Mic, Shield, Zap, Code, Database, Globe, Cpu } from 'lucide-react';
import { useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Patents() {
  const patents = [
    {
      id: "personalized-education",
      icon: Brain,
      title: "World's first 10,000+ Concepts Based Personalized Education",
      description: "A revolutionary approach to personalized learning that adapts to individual student needs."
    },
    {
      id: "interactive-voice",
      icon: Mic,
      title: "World's first 2-Way Interactive Voice Based Education Platform",
      description: "Engaging voice-enabled learning experience that responds to student interactions."
    },
    {
      id: "multiple-passwords",
      icon: Shield,
      title: "Single User Multiple Passwords Mechanism",
      description: "Enhanced security protocol for educational platforms with multiple access levels."
    },
    {
      id: "doubt-clarification",
      icon: Zap,
      title: "AI-Powered Doubt Clarification System",
      description: "Intelligent system that provides instant clarification for student queries."
    },
    {
      id: "adaptive-learning",
      icon: Code,
      title: "Adaptive Learning Algorithm",
      description: "Machine learning algorithm that continuously adapts to student learning patterns."
    },
    {
      id: "content-recommendation",
      icon: Database,
      title: "Smart Content Recommendation Engine",
      description: "AI-driven engine that recommends personalized learning content."
    },
    {
      id: "multi-language",
      icon: Globe,
      title: "Multi-Language Learning Platform",
      description: "Platform supporting seamless learning across multiple languages."
    },
    {
      id: "performance-analytics",
      icon: Cpu,
      title: "Real-time Performance Analytics",
      description: "Advanced analytics system for tracking and improving student performance."
    },
    {
      id: "cognitive-load",
      icon: Brain,
      title: "Cognitive Load Optimization",
      description: "Technology that optimizes learning by managing cognitive load effectively."
    }
  ];

  const PatentCard = ({ item }: { item: typeof patents[0] }) => (
    <div className="group w-full h-full flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative" style={{ minHeight: '100%' }}>
      {/* Gradient Border Top */}
      <div className="h-1.5 bg-gradient-to-r from-[#00334e] via-[#145374] to-[#5588a3] w-full"></div>
      
      {/* Card Content */}
      <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col h-full">
        <div className="flex items-start mb-3 sm:mb-4 md:mb-5">
          <div className="bg-gradient-to-br from-[#00334e] to-[#145374] p-2 sm:p-2.5 rounded-lg mr-3 sm:mr-4 flex-shrink-0 transform transition-transform duration-300 group-hover:rotate-6">
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#00334e] line-clamp-2 leading-tight">
            {item.title}
          </h3>
        </div>
        
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-grow leading-relaxed">
          {item.description}
        </p>
        
        <div className="pt-3 sm:pt-4 mt-auto border-t border-gray-100">
          <Link 
            href={`/patents/${item.id}`}
            className="inline-flex items-center text-sm sm:text-base text-[#145374] hover:text-[#00334e] font-medium transition-all duration-300 group"
          >
            <span className="relative">
              Learn more
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5588a3] transition-all duration-300 group-hover:w-full"></span>
            </span>
            <svg 
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00334e]/0 via-[#145374]/0 to-[#5588a3]/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );

  const Carousel: React.FC<{ items: typeof patents }> = ({ items }) => {
    // Create a ref to track the tallest card height
    const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
    
    // Function to update card heights
    const updateHeights = useCallback(() => {
      if (!slideRefs.current) return;
      
      // Reset all heights to auto first
      slideRefs.current.forEach(slide => {
        if (slide) {
          slide.style.height = 'auto';
        }
      });
      
      // Group slides by row
      const rows = new Map<number, HTMLDivElement[]>();
      
      slideRefs.current.forEach(slide => {
        if (!slide) return;
        
        const rect = slide.getBoundingClientRect();
        const row = Math.floor(rect.top);
        
        if (!rows.has(row)) {
          rows.set(row, []);
        }
        rows.get(row)?.push(slide);
      });
      
      // Set same height for all slides in each row
      rows.forEach(rowSlides => {
        if (rowSlides.length <= 1) return;
        
        // Find max height in the row
        const maxHeight = Math.max(
          ...rowSlides.map(slide => slide.offsetHeight)
        );
        
        // Apply max height to all slides in the row
        rowSlides.forEach(slide => {
          if (slide) {
            slide.style.height = `${maxHeight}px`;
          }
        });
      });
    }, []);
    
    // Update card heights when window resizes or items change
    useEffect(() => {
      // Initial update with a small delay to ensure DOM is ready
      const timer = setTimeout(updateHeights, 300);
      
      // Update on window resize with debounce
      let resizeTimer: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateHeights, 100);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Initial update after a short delay
      const initTimer = setTimeout(updateHeights, 500);
      
      // Cleanup
      return () => {
        clearTimeout(timer);
        clearTimeout(initTimer);
        clearTimeout(resizeTimer);
        window.removeEventListener('resize', handleResize);
      };
    }, [items, updateHeights]);

    return (
      <div className="relative group w-full">
        <Swiper
          modules={[A11y, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 24 },
            480: { slidesPerView: 1, spaceBetween: 24 },
            640: { slidesPerView: 2, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 2, spaceBetween: 32 },
            1280: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="px-4 sm:px-6 md:px-8 py-6 w-full"
          loop={true}
          speed={800}
          grabCursor={true}
          watchSlidesProgress={true}
          slideToClickedSlide={true}
          onResize={updateHeights}
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div 
                ref={el => {
                  if (el) {
                    slideRefs.current[index] = el;
                  }
                }}
                className="h-full flex"
              >
                <div className="w-full">
                  <PatentCard item={item} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00334e] to-[#145374] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Revolutionizing Education in the 21st Century
            <br />
            <span className="text-[#5588a3]">with AI-Driven Innovations</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-16 text-gray-200">
            9 Patents Ready to Apply
          </p>
          <div className="flex justify-center">
            <div className="w-8 h-8 border-2 border-[#5588a3] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#5588a3] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tech Section */}
      <section className="py-16 bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00334e] mb-6">
                Our AI Infused Tech for Enhanced Learning
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "AI Proctoring",
                  "Doubts Clarifier", 
                  "Face Recognition",
                  "Question Generators",
                  "Speech Recognition",
                  "Personalized Learning"
                ].map((tech, index) => (
                  <div key={index} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-[#00334e] text-center shadow-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00334e] to-[#145374] rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="w-4 h-4 bg-[#5588a3] rounded-full absolute top-12 left-16 animate-pulse"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full absolute top-20 right-20 animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full absolute bottom-16 left-12 animate-pulse delay-400"></div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full absolute bottom-24 right-16 animate-pulse delay-600"></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full absolute top-32 left-32 animate-pulse delay-800"></div>
                <div className="w-4 h-4 bg-teal-400 rounded-full absolute bottom-32 right-32 animate-pulse delay-1000"></div>
              </div>
              <div className="text-center text-white z-10">
                <Brain className="h-20 w-20 mx-auto mb-4 text-[#5588a3]" />
                <p className="text-lg">AI-Powered Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00334e] mb-4">
              Patent & Research Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Innovative technologies that are reshaping the future of education
            </p>
          </div>
          {/* Enhanced Carousel Component */}
          <Carousel items={patents} />
          {/* Carousel End */}
        </div>
      </section>

      {/* Innovation Banner */}
      <section className="py-16 bg-gradient-to-r from-[#00334e] to-[#145374] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Leading Innovation in Educational Technology
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Our patents represent breakthrough innovations that are transforming how students learn and engage with educational content worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#5588a3] hover:bg-white hover:text-[#00334e] px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More About Our Patents
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#00334e] px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Our Research Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}