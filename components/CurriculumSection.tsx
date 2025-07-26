'use client';

import { useState, useCallback, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import Autoplay from 'embla-carousel-autoplay';

type Curriculum = {
  id: string;
  name: string;
  logo: string;
};

type Language = {
  id: string;
  name: string;
  code: string;
};

const CURRICULUM_OPTIONS: Curriculum[] = [
  { id: 'state', name: 'State Board', logo: '🏫' },
  { id: 'cbse', name: 'CBSE', logo: '📚' },
  { id: 'cisc', name: 'CISCE', logo: '🏢' },
  { id: 'ib', name: 'IB', logo: '🌍' },
  { id: 'neet', name: 'NEET', logo: '⚕️' },
  { id: 'jee', name: 'JEE', logo: '🔬' },
  { id: 'nios', name: 'NIOS', logo: '📖' },
];

const LANGUAGE_OPTIONS: Language[] = [
  { id: 'en', name: 'English', code: 'EN' },
  { id: 'hi', name: 'हिंदी', code: 'HI' },
  { id: 'ta', name: 'தமிழ்', code: 'TA' },
  { id: 'te', name: 'తెలుగు', code: 'TE' },
  { id: 'kn', name: 'ಕನ್ನಡ', code: 'KN' },
  { id: 'ml', name: 'മലയാളം', code: 'ML' },
];

export function CurriculumSection() {
  const [selectedCurriculum, setSelectedCurriculum] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [isPaused, setIsPaused] = useState(false);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      dragFree: true,
      containScroll: 'trimSnaps',
    },
    [WheelGesturesPlugin(), Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  // Pause autoplay on hover or when interacting with the carousel
  const handleMouseEnter = useCallback(() => {
    if (emblaApi) emblaApi.plugins().autoplay?.stop();
    setIsPaused(true);
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    if (emblaApi) emblaApi.plugins().autoplay?.play();
    setIsPaused(false);
  }, [emblaApi]);

  // Initialize autoplay
  useEffect(() => {
    if (emblaApi) {
      emblaApi.plugins().autoplay?.play();
      return () => emblaApi.plugins().autoplay?.stop();
    }
  }, [emblaApi]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading & Subheading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Multiple Curriculum & Languages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from a variety of educational boards and languages to personalize your learning experience.
          </p>
        </div>

        {/* Personalize Your Learning Card - Full Width */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6 mx-auto">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
            Personalize Your Learning
          </h3>
          <p className="text-gray-600 text-center mb-8">
            Choose your board and language to get started
          </p>
          
          <div className="space-y-6 max-w-md mx-auto">
            <div>
              <label htmlFor="curriculum" className="block text-sm font-medium text-gray-700 mb-2">
                Select Your Board
              </label>
              <select
                id="curriculum"
                value={selectedCurriculum}
                onChange={(e) => setSelectedCurriculum(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Choose curriculum</option>
                {CURRICULUM_OPTIONS.map((curriculum) => (
                  <option key={curriculum.id} value={curriculum.id}>
                    {curriculum.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
                Select Language
              </label>
              <select
                id="language"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Choose language</option>
                {LANGUAGE_OPTIONS.map((language) => (
                  <option key={language.id} value={language.id}>
                    {language.name} ({language.code})
                  </option>
                ))}
              </select>
            </div>

            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                selectedCurriculum && selectedLanguage
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
              disabled={!selectedCurriculum || !selectedLanguage}
            >
              Start Learning Now →
            </button>
          </div>
        </div>

        {/* Supported Curriculum Carousel - Full Width */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Supported Curriculum
          </h3>
          
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {[...CURRICULUM_OPTIONS, ...CURRICULUM_OPTIONS].map((curriculum, index) => (
                  <div 
                    key={`${curriculum.id}-${index}`}
                    className="flex-shrink-0 w-40 mx-2 bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-transform hover:scale-105"
                    onClick={() => setSelectedCurriculum(curriculum.id)}
                  >
                    <span className="text-3xl mb-3">{curriculum.logo}</span>
                    <span className="text-sm font-medium text-gray-900 text-center">
                      {curriculum.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
