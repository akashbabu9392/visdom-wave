"use client";

import { Brain, Mic, Shield, Zap, Code, Database, Globe, Cpu } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Patents() {
  const patents = [
    {
      icon: Brain,
      title: "World's first 10,000+ Concepts Based Personalized Education",
      description: "A revolutionary approach to personalized learning that adapts to individual student needs."
    },
    {
      icon: Mic,
      title: "World's first 2-Way Interactive Voice Based Education Platform",
      description: "Engaging voice-enabled learning experience that responds to student interactions."
    },
    {
      icon: Shield,
      title: "Single User Multiple Passwords Mechanism",
      description: "Enhanced security protocol for educational platforms with multiple access levels."
    },
    {
      icon: Zap,
      title: "AI-Powered Doubt Clarification System",
      description: "Intelligent system that provides instant clarification for student queries."
    },
    {
      icon: Code,
      title: "Adaptive Learning Algorithm",
      description: "Machine learning algorithm that continuously adapts to student learning patterns."
    },
    {
      icon: Database,
      title: "Smart Content Recommendation Engine",
      description: "AI-driven engine that recommends personalized learning content."
    },
    {
      icon: Globe,
      title: "Multi-Language Learning Platform",
      description: "Platform supporting seamless learning across multiple languages."
    },
    {
      icon: Cpu,
      title: "Real-time Performance Analytics",
      description: "Advanced analytics system for tracking and improving student performance."
    },
    {
      icon: Brain,
      title: "Cognitive Load Optimization",
      description: "Technology that optimizes learning by managing cognitive load effectively."
    }
  ];

  // Enhanced carousel component with smooth scrolling and circular loop
  interface CarouselItem {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }

  interface CarouselProps {
    items: CarouselItem[];
    cardsPerView?: number;
  }

  const Carousel: React.FC<CarouselProps> = ({ items, cardsPerView: initialCardsPerView = 1 }) => {
    const [cardsPerView, setCardsPerView] = useState(initialCardsPerView);
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemCount = items.length;
    const totalSlides = Math.ceil(itemCount / cardsPerView);
    const transitionDuration = 700; // Consistent duration for all devices

    // Handle window resize with debounce
    useEffect(() => {
      let timeoutId: NodeJS.Timeout;
      
      const handleResize = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          let newCardsPerView = 1;
          if (window.innerWidth >= 1280) newCardsPerView = 4;
          else if (window.innerWidth >= 1024) newCardsPerView = 3;
          else if (window.innerWidth >= 640) newCardsPerView = 2;
          
          if (newCardsPerView !== cardsPerView) {
            setCardsPerView(newCardsPerView);
            // Reset current to prevent out of bounds after resize
            setCurrent(prev => Math.min(prev, Math.ceil(itemCount / newCardsPerView) - 1));
          }
        }, 100);
      };
      
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial call
      
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', handleResize);
      };
    }, [cardsPerView, itemCount]);

    // Smooth scroll to position with consistent timing
    const smoothScroll = (targetIndex: number) => {
      if (isAnimating) return;
      
      setIsAnimating(true);
      setCurrent(targetIndex);
      
      // Reset animation lock after transition
      setTimeout(() => {
        setIsAnimating(false);
        
        // Handle seamless looping after animation completes
        if (targetIndex >= totalSlides) {
          setTimeout(() => {
            setCurrent(0);
          }, 50);
        } else if (targetIndex < 0) {
          setTimeout(() => {
            setCurrent(totalSlides - 1);
          }, 50);
        }
      }, transitionDuration);
    };

    // Navigate to next/previous slide with circular loop
    const goToSlide = (direction: 'prev' | 'next') => {
      let newIndex = direction === 'next' ? current + 1 : current - 1;
      
      // Handle circular navigation with seamless loop
      if (direction === 'next') {
        if (current >= totalSlides - 1) {
          // Create a seamless loop by immediately resetting to start without animation
          setCurrent(totalSlides);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setCurrent(0);
            });
          });
          return;
        }
      } else {
        if (current <= 0) {
          // Create a seamless loop by immediately moving to the end without animation
          setCurrent(-1);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setCurrent(totalSlides - 1);
            });
          });
          return;
        }
      }
      
      smoothScroll(newIndex);
    };

    // Calculate item width based on number of cards per view
    const itemWidth = 100 / cardsPerView;

    return (
      <div className="relative w-full overflow-hidden">
        {/* Navigation Arrows - Always visible on all devices */}
        <button
          aria-label="Previous"
          onClick={() => goToSlide('prev')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors duration-200"
          style={{ marginLeft: '0.5rem' }}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#00334e]" />
        </button>
        
        <button
          aria-label="Next"
          onClick={() => goToSlide('next')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors duration-200"
          style={{ marginRight: '0.5rem' }}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00334e]" />
        </button>

        {/* Carousel Track */}
        <div className="overflow-visible w-full">
          <div
            ref={containerRef}
            className="flex transition-transform duration-700 ease-in-out will-change-transform"
            style={{
              transform: `translateX(-${current * itemWidth}%)`,
              width: `${itemCount * itemWidth}%`,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              WebkitTransformStyle: 'preserve-3d',
              transformStyle: 'preserve-3d',
              WebkitFontSmoothing: 'subpixel-antialiased'
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="px-2 sm:px-3 md:px-4 transition-all duration-300 hover:scale-[1.02]"
                style={{ width: `${itemWidth}%`, minWidth: 0 }}
              >
                <div className="bg-[#00334e] text-white p-4 sm:p-6 md:p-8 rounded-lg hover:bg-[#145374] transition-colors h-full flex flex-col">
                  <item.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#5588a3] mb-4 md:mb-6" />
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-4 md:mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <button className="text-xs sm:text-sm text-[#5588a3] hover:text-white transition-colors font-medium mt-auto self-start">
                    View More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
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