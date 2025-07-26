import Link from 'next/link';
import { Check, Play, Star, ChevronRight, Cpu, Headset, BarChart, Sparkles, Bot, Zap, MessageSquare, ChevronDown, MoreHorizontal } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00334e] to-[#145374] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Empowering the Next Generation with AI-Powered Education
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Transforming learning experiences through personalized, adaptive education powered by artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/features"
                  className="bg-white text-[#00334e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Explore Features
                </Link>
                <Link
                  href="/signup"
                  className="bg-[#5588a3] hover:bg-[#145374] px-8 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 rounded-2xl p-8 w-full max-w-md h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 bg-[#5588a3] rounded-full mx-auto mb-4 flex items-center justify-center text-6xl">🤖</div>
                  <p className="text-sm text-gray-300">3D AI Assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Platform - Modern Design */}
      <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-[#e6f2ff] text-[#22546e] rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-[#22546e] mb-6">
              Elevate Your Learning Experience
            </h2>
            <p className="text-lg text-[#4a6c8d]">
              Join thousands of successful learners who have transformed their careers with our innovative platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                value: "97%",
                label: "Student Satisfaction",
                icon: "🎓"
              },
              {
                value: "50K+",
                label: "Active Students",
                icon: "👥"
              },
              {
                value: "24/7",
                label: "Support Available",
                icon: "🛟"
              },
              {
                value: "100+",
                label: "Expert Instructors",
                icon: "🏆"
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group bg-[#22546e] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-[#e1e9ee]"
              >
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold text-white/90">{stat.label}</h3>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Learning",
                description: "Engage with interactive content and hands-on projects to enhance your learning experience.",
                icon: "🎯"
              },
              {
                title: "Expert Instructors",
                description: "Learn from industry experts with years of experience in their respective fields.",
                icon: "👨‍🏫"
              },
              {
                title: "Flexible Schedule",
                description: "Access courses anytime, anywhere, and learn at your own pace.",
                icon: "⏱️"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group bg-[#22546e] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e1e9ee] overflow-hidden relative text-white"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:rotate-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 mb-6">{feature.description}</p>
                <button className="text-sm font-medium text-white/90 hover:text-white flex items-center group-hover:translate-x-1 transition-all duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore the Tapestry of Time - Modern Redesign */}
      <section className="py-20 bg-gradient-to-br from-[#001a2c] to-[#00334e] text-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%) rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4 text-white/90">
              Time Travel Through Learning
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Explore the Tapestry of Time
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Journey through history with our immersive educational platform that brings the past to life through interactive experiences and expert-led explorations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Historical Archives",
                description: "Access a vast collection of historical resources, primary sources, and multimedia content from different eras.",
                icon: "📜",
                gradient: "from-purple-500 to-blue-500"
              },
              {
                title: "Interactive Timelines",
                description: "Navigate through history with our dynamic, interactive timelines that connect events across different periods.",
                icon: "⏳",
                gradient: "from-amber-500 to-orange-500"
              },
              {
                title: "Expert-Led Expeditions",
                description: "Join live sessions with historians and archaeologists exploring historical sites and artifacts.",
                icon: "🔍",
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 overflow-hidden relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-3xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white/90">{item.title}</h3>
                <p className="text-blue-100/80 mb-6 leading-relaxed">{item.description}</p>
                <button className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  Discover more
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Immersive Learning Journeys",
                description: "Experience history through virtual reality reconstructions and 3D models of historical sites and artifacts.",
                icon: "🌐",
                features: ["VR Tours", "3D Artifacts", "Historical Reenactments"]
              },
              {
                title: "Personalized Learning Paths",
                description: "Follow customized learning journeys based on your interests and progress, with adaptive content recommendations.",
                icon: "🎯",
                features: ["AI Recommendations", "Progress Tracking", "Skill Assessments"]
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 150}
              >
                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-2xl mr-5 flex-shrink-0 shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-blue-100/80 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.features.map((feature, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1.5 bg-white/10 rounded-full text-white/80">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#001a2c]">
              Start Your Historical Journey
            </button>
          </div>
        </div>
      </section>

      {/* Watch How Wisdom Wave Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#00334e] mb-4">Watch How Wisdom Wave Works</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            See how our AI-powered system works to elevate learning and feedback
          </p>
          <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
            <div className="w-20 h-20 bg-[#00334e] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#145374] transition-colors">
              <Play className="h-10 w-10" />
            </div>
          </div>
        </div>
      </section>



      {/* Why Choose Wisdom Wave? - Modern UI/UX */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#f8f9ff] to-[#f0f4ff]">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlZmY1ZmYiIGZpbGwtb3BhY2l0eT0iMC42Ij48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINFYyOEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMGgtMnY0SDB2Mmg0djRoMlY2aDRWNEg2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-200">
              <Sparkles className="h-5 w-5 text-yellow-200 mr-2" />
              <span className="text-sm font-semibold text-white tracking-wide">Join 91,000+ Happy Learners</span>
            </div>
          </div>
          
          {/* Heading and Subheading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Why Choose <span className="whitespace-nowrap">Wisdom Wave?</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the future of education with our AI-powered learning platform designed to revolutionize how students learn and grow.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Feature Cards */}
            <div className="space-y-6">
              {/* AI-Powered Learning Card */}
              <div className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 border border-white/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-start">
                  <div className="flex-shrink-0 p-3.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Learning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Advanced AI adapts to each student's unique learning style and pace in real-time, creating a personalized educational journey.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Smart Tutoring Card */}
              <div className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 border border-white/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-start">
                  <div className="flex-shrink-0 p-3.5 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl text-white shadow-lg">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Tutoring</h3>
                    <p className="text-gray-600 leading-relaxed">
                      24/7 AI tutors provide personalized assistance and instant explanations, ensuring you never get stuck on a challenging concept.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Adaptive Feedback Card */}
              <div className="flex items-start p-6 bg-white rounded-xl border border-gray-200">
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Zap className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Adaptive Feedback</h3>
                  <p className="mt-1 text-gray-600 text-base">
                    AI-driven insights and recommendations for continuous improvement
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - AI Learning Assistant Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-900">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                </div>
                <div className="text-sm font-medium text-white">AI Learning Assistant</div>
                <div className="w-8 h-8 flex items-center justify-center text-gray-400">
                  <MoreHorizontal className="h-5 w-5" />
                </div>
              </div>
              
              {/* AI Recommendation */}
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-sm font-medium text-gray-900 mb-3">AI Recommendation</h3>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">I recommend reviewing the topic on Quantum Mechanics as it aligns with your learning goals and upcoming test.</p>
                </div>
              </div>
              
              {/* Weekly Progress */}
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Weekly Progress</h3>
                <div className="flex items-end justify-between h-40">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                    <div key={day} className="flex flex-col items-center">
                      <div 
                        className="w-5 bg-blue-500 rounded-t-sm" 
                        style={{ height: `${30 + (index * 10)}%` }}
                      ></div>
                      <span className="text-xs text-gray-500 mt-2">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Student Success Story */}
              <div className="p-6">
                <div className="flex items-start">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                      <Play className="h-5 w-5 ml-0.5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900">Student Success Story</h4>
                    <p className="text-sm text-gray-600 mt-1">&ldquo;Wisdom Wave helped me improve my grades by 30% in just 2 months!&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leader's Voice */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#00334e] to-[#145374] rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-white/20 rounded-lg p-1 inline-block">
                    <div className="bg-gray-200 w-full h-48 rounded-md"></div>
                  </div>
                </div>
                <div className="md:w-2/3 text-white">
                  <blockquote className="text-lg md:text-xl italic mb-6">
                    "In this educational revolution, Wisdom Wave serves as a guiding light, illuminating the path to knowledge through innovative technology and personalized learning experiences that transform how students engage with education."
                  </blockquote>
                  <div className="font-medium">
                    <p className="text-white">Dr. Sarah Johnson</p>
                    <p className="text-gray-300">Chief Education Officer, Wisdom Wave</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent's Voice */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#00334e] mb-12">Parent's Voice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Parent of Priya (Class 9)",
                testimonial: "Wisdom Wave has transformed how my daughter learns. The AI tutor helps her understand complex concepts with ease.",
                rating: 5
              },
              {
                name: "Priya Sharma",
                role: "Parent of Arjun (Class 7)",
                testimonial: "The progress reports and regular updates give me peace of mind about my child's education.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#00334e] mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {['Amazon', 'Google', 'Apple', 'Microsoft', 'Netflix'].map((company, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-20">
                <span className="text-gray-400 font-medium">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multiple Curriculum & Languages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#00334e] mb-4">Multiple Curriculum & Languages</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose from a variety of curriculums and learn in your preferred language
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Supported Curriculums</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {['CBSE', 'ICSE', 'IB', 'Cambridge', 'State Boards'].map((curriculum, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {curriculum}
                  </span>
                ))}
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-4">Available Languages</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['English', 'हिंदी', 'தமிழ்', 'తెలుగు', 'മലയാളം', 'বাংলা', 'मराठी', 'ગુજરાતી'].map((language, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="bg-[#00334e] hover:bg-[#145374] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore All Options
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}