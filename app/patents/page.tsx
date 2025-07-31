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

  const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [cardsPerView, setCardsPerView] = useState(1);
    const [current, setCurrent] = useState(0);
    const [transitionMs, setTransitionMs] = useState(500);
    const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">("mobile");
    const [isAnimating, setIsAnimating] = useState(false);
    const itemCount = items.length;

    // Update breakpoint and cardsPerView on resize
    useEffect(() => {
      const updateSettings = () => {
        if (window.innerWidth >= 1280) {
          setBreakpoint("desktop");
          setCardsPerView(4);
          setTransitionMs(1000);
        } else if (window.innerWidth >= 1024) {
          setBreakpoint("desktop");
          setCardsPerView(3);
          setTransitionMs(1000);
        } else if (window.innerWidth >= 600) {
          setBreakpoint("tablet");
          setCardsPerView(2);
          setTransitionMs(500);
        } else {
          setBreakpoint("mobile");
          setCardsPerView(1);
          setTransitionMs(500);
        }
      };
      updateSettings();
      window.addEventListener("resize", updateSettings);
      return () => window.removeEventListener("resize", updateSettings);
    }, []);

    // Calculate max index based on cardsPerView and breakpoint
    const maxIndex =
      breakpoint === "desktop"
        ? Math.max(0, Math.ceil(itemCount / cardsPerView) - 1)
        : Math.max(0, itemCount - cardsPerView);

    // Clamp current index on maxIndex change
    useEffect(() => {
      setCurrent((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

    // Prevent user clicking quickly before transition finishes
    const goToSlide = (direction: "prev" | "next") => {
      if (isAnimating) return;
      setIsAnimating(true);

      setCurrent((prev) => {
        let nextIndex;
        if (direction === "next") {
          if (breakpoint === "desktop") {
            nextIndex = prev === maxIndex ? 0 : prev + 1;
          } else {
            nextIndex = prev === maxIndex ? prev : prev + 1; // stop at end, no loop
          }
        } else {
          if (breakpoint === "desktop") {
            nextIndex = prev === 0 ? maxIndex : prev - 1;
          } else {
            nextIndex = prev === 0 ? 0 : prev - 1; // stop at start, no loop
          }
        }
        return nextIndex;
      });

      setTimeout(() => {
        setIsAnimating(false);
      }, transitionMs + 50); // add slight buffer for animation safety
    };

    const itemWidth = 100 / cardsPerView;

    const getArrowStyles = () => {
      if (breakpoint === "desktop") {
        return { prev: { marginLeft: "0.5rem" }, next: { marginRight: "0.5rem" } };
      }
      if (breakpoint === "mobile") {
        return { prev: { marginLeft: "-0.5rem" }, next: { marginRight: "-0.5rem" } };
      }
      return { prev: { marginLeft: "0rem" }, next: { marginRight: "0rem" } };
    };
    const arrowStyles = getArrowStyles();

    return (
      <div className="relative w-full overflow-hidden">
        {/* Navigation Arrows */}
        {/* Left Arrow */}
        <button
          aria-label="Previous"
          onClick={() => goToSlide("prev")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-all duration-300"
          style={{
            ...arrowStyles.prev,
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: current === 0 && breakpoint !== "desktop" ? 0.5 : 1, // disable arrow at start
            cursor: current === 0 && breakpoint !== "desktop" ? "not-allowed" : "pointer",
            pointerEvents: current === 0 && breakpoint !== "desktop" ? "none" : "auto",
          }}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#00334e]" />
        </button>

        {/* Right Arrow */}
        <button
          aria-label="Next"
          onClick={() => goToSlide("next")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-all duration-300"
          style={{
            ...arrowStyles.next,
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: current === maxIndex && breakpoint !== "desktop" ? 0.5 : 1, // disable arrow at end
            cursor: current === maxIndex && breakpoint !== "desktop" ? "not-allowed" : "pointer",
            pointerEvents: current === maxIndex && breakpoint !== "desktop" ? "none" : "auto",
          }}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00334e]" />
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden w-full">
          <div
            className="flex will-change-transform transition-transform"
            style={{
              transitionDuration: `${transitionMs}ms`,
              transitionProperty: "transform",
              transitionTimingFunction:
                breakpoint === "desktop" ? "ease-in-out" : "cubic-bezier(0.4, 0, 0.2, 1)",
              transform: `translateX(-${current * itemWidth}%)`,
              width: `${itemCount * itemWidth}%`,
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="transition-all duration-300 hover:scale-[1.02]"
                style={{
                  width: `${itemWidth}%`,
                  minWidth: 0,
                  paddingLeft:
                    breakpoint === "desktop"
                      ? "1rem"
                      : breakpoint === "tablet"
                      ? "0.75rem"
                      : "0.5rem",
                  paddingRight:
                    breakpoint === "desktop"
                      ? "1rem"
                      : breakpoint === "tablet"
                      ? "0.75rem"
                      : "0.5rem",
                }}
              >
                <div className="bg-[#00334e] text-white p-4 sm:p-6 md:p-8 rounded-lg hover:bg-[#145374] transition-all duration-300 h-full flex flex-col transform hover:scale-[1.02] hover:shadow-lg">
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