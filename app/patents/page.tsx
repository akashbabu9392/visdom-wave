import { Brain, Mic, Shield, Zap, Code, Database, Globe, Cpu } from 'lucide-react';

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patents.map((patent, index) => (
              <div key={index} className="bg-[#00334e] text-white p-8 rounded-lg hover:bg-[#145374] transition-colors">
                <patent.icon className="h-12 w-12 text-[#5588a3] mb-6" />
                <h3 className="text-xl font-bold mb-4 leading-tight">{patent.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{patent.description}</p>
                <button className="text-[#5588a3] hover:text-white transition-colors font-medium">
                  View More →
                </button>
              </div>
            ))}
          </div>
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