import { BookOpen, Clock, FileText, Lightbulb, ArrowRight } from 'lucide-react';

const TapestrySection = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Interactive Timelines",
      description: "Navigate through centuries with our dynamic, interactive timelines that make history engaging and easy to understand."
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Primary Sources",
      description: "Access authentic historical documents, artifacts, and media to experience history firsthand."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      title: "Expert Analysis",
      description: "Gain insights from historians and scholars who bring context and depth to historical events."
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pill label */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
            ACADEMIC CONCEPTS
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore the Tapestry of Time
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            Journey through history with our interactive modules that bring the past to life through immersive storytelling and AI-powered insights.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100">
              <div className="aspect-square w-full flex items-center justify-center p-8 md:p-12">
                <BookOpen className="w-32 h-32 text-blue-300" />
              </div>
              <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center">
                <span className="text-sm font-medium text-blue-700">500+ Historical Events</span>
              </div>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="space-y-4 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-2.5 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-colors duration-200">
            Start Your Historical Journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TapestrySection;
