import Link from 'next/link';
import Image from 'next/image';
import { Check, Play, Star, ChevronRight, Cpu, Headset, BarChart, Sparkles, Bot, Zap, MessageSquare, ChevronDown, MoreHorizontal } from 'lucide-react';
import { ParentTestimonialCard } from '@/components/ParentTestimonialCard';
import { StatCard } from '@/components/StatCard';
import { CurriculumSection } from '@/components/CurriculumSection';

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

      {/* Why Choose Us - Modern Redesign */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Learning",
                description: "Engage with interactive content and hands-on projects to enhance your learning experience.",
                icon: "🎯",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Expert Instructors",
                description: "Learn from industry experts with years of experience in their respective fields.",
                icon: "👨‍🏫",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Flexible Schedule",
                description: "Access courses anytime, anywhere, and learn at your own pace.",
                icon: "⏱️",
                gradient: "from-amber-500 to-orange-500"
              },
              {
                title: "Personalized Pathways",
                description: "AI-driven recommendations help you focus on what matters most for your goals.",
                icon: "🤖",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                title: "Progress Tracking",
                description: "Visualize your achievements and stay motivated with real-time analytics.",
                icon: "📈",
                gradient: "from-pink-500 to-yellow-500"
              },
              {
                title: "24/7 Support",
                description: "Get help whenever you need it with our round-the-clock support team.",
                icon: "🛟",
                gradient: "from-indigo-500 to-blue-500"
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
                <h3 className="text-xl font-bold mb-3 text-[#22546e] group-hover:text-blue-900">{item.title}</h3>
                <p className="text-[#4a6c8d] mb-6 leading-relaxed">{item.description}</p>
                <button className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 group-hover:translate-x-1 transition-all duration-300">
                  Learn more
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-3xl mr-5 flex-shrink-0 shadow-lg">
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


      {/* Why Choose Wisdom Wave? Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Why Choose Wisdom Wave?</h2>
            <p className="text-lg text-gray-600">Experience the future of education with our innovative learning platform designed to help you succeed.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Side - Features */}
            <div className="lg:col-span-2 space-y-6">
              {[{icon: <Cpu className="w-10 h-10 text-blue-600" />,title: "AI-Powered Learning",description: "Personalized learning paths powered by advanced AI algorithms that adapt to your unique learning style and pace."},{icon: <Headset className="w-10 h-10 text-green-600" />,title: "Smart Tutoring",description: "24/7 access to AI tutors that provide instant help and guidance whenever you need it."},{icon: <BarChart className="w-10 h-10 text-purple-600" />,title: "Adaptive Feedback",description: "Get real-time feedback and recommendations to improve your understanding and performance."}].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-3">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Right Side - AI Learning Assistant Card */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">AI Learning Assistant</h3>
                  <div className="flex space-x-2">
                    <button className="p-1 rounded-full hover:bg-blue-100 transition-colors"><MoreHorizontal className="w-5 h-5 text-gray-500" /></button>
                  </div>
                </div>
                {/* AI Recommendation */}
                <div className="bg-white p-4 rounded-xl mb-6 border border-blue-100 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full"><Sparkles className="w-5 h-5 text-blue-600" /></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">AI Recommendation</h4>
                      <p className="text-sm text-gray-600">Based on your progress, we recommend focusing on Machine Learning concepts next.</p>
                    </div>
                  </div>
                </div>
                {/* Weekly Progress */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Weekly Progress</h4>
                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xs text-gray-500 mb-1">{day}</div>
                        <div className={`h-2 rounded-full ${i < 5 ? 'bg-blue-600' : 'bg-blue-100'}`}></div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Student Success Story */}
                <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Student Success Story</h4>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-medium">JD</div>
                    <div>
                      <p className="text-sm text-gray-700 mb-2">"Wisdom Wave transformed how I learn. The AI tutor helped me understand complex topics in half the time!"</p>
                      <p className="text-xs text-gray-500">- John D., Computer Science Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Leader's Voice Section */}
      <section className="py-16 bg-gradient-to-br from-[#111827] to-[#1e293b] text-white relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/10 opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight">Leader&apos;s Voice</h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Side - Testimonial */}
            <div className="lg:w-1/2">
              <div className="relative bg-white/20 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-white/10">
                <svg className="w-12 h-12 text-blue-400 mb-6 animate-float" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-2xl md:text-3xl font-medium text-blue-100 mb-8">&ldquo;We are committed to transforming education through innovative technology that makes learning more engaging, accessible, and effective for students across India.&rdquo;</blockquote>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">RS</div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-white">Rakesh Sharma</p>
                    <p className="text-blue-200">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Card */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100 relative group">
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300 pointer-events-none z-10" />
                <div className="relative w-full h-56 bg-gray-200 overflow-hidden">
                  <Image src="/images/celebrating-excellence.jpg" alt="Celebrating Excellence" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" fill />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Celebrating Excellence</h3>
                  <p className="text-gray-600 mb-6">Recognizing outstanding achievements in education and innovation</p>
                  
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified by Educators
                    </span>
                    <p className="ml-4 text-sm text-gray-500">Used by over 1000 schools across India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Parent's Voice Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Parent&apos;s Voice</h2>
            <p className="text-gray-600">Hear what parents have to say about their children&apos;s learning journey with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ParentTestimonialCard
              name="Priya Sharma"
              role="Mother of Arjun, Class 5"
              testimonial="My son&apos;s confidence in mathematics has improved tremendously since he started using this platform. The personalized learning approach is truly effective."
              rating={5}
              initials="PS"
            />
            <ParentTestimonialCard
              name="Rahul Verma"
              role="Father of Ananya, Class 7"
              testimonial="The progress tracking feature helps me stay updated on my daughter&apos;s performance. The interactive lessons keep her engaged for hours!"
              rating={5}
              isFeatured={true}
              initials="RV"
            />
            <ParentTestimonialCard
              name="Meena Patel"
              role="Mother of Rohan, Class 3"
              testimonial="As a working parent, I appreciate the detailed progress reports. It&apos;s great to see my child developing a love for learning."
              rating={4}
              initials="MP"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatCard
              value="98%"
              label="Parent Satisfaction"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
              iconBgColor="bg-purple-500"
            />
            <StatCard
              value="4.9"
              label="Average Rating"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              }
              iconBgColor="bg-yellow-500"
            />
            <StatCard
              value="50K+"
              label="Happy Families"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
              iconBgColor="bg-pink-500"
            />
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="w-full bg-[#04344a] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
            {[
              { name: 'Amazon', logo: '/images/amazon.jpg' },
              { name: 'Google', logo: '/images/google.jpg' },
              { name: 'Microsoft', logo: '/images/microsoft.jpg' },
              { name: 'Apple', logo: '/images/apple.jpg' },
              { name: 'WhatsApp', logo: '/images/whatsapp.jpeg' },
              { name: 'Netflix', logo: '/images/netflix.jpg' },
            ].map((partner) => (
              <div key={partner.name} className="bg-[#0e4666] border border-[#2e5c7a] rounded-lg flex flex-col items-center justify-center py-6 px-2">
                <div className="w-20 h-12 flex items-center justify-center bg-white rounded-md mb-2">
                  <Image src={partner.logo} alt={partner.name + ' logo'} width={80} height={48} className="object-contain w-20 h-12" />
                </div>
                <p className="text-white text-base font-medium text-center mt-1">{partner.name}</p>
              </div>
            ))}
          </div>
          <p className="text-white text-center text-base mt-2">Backed by IIT Alumni • Made in India <span className='align-middle'>🇮🇳</span></p>
        </div>
      </section>

      {/* Curriculum Section */}
      <CurriculumSection />

      {/* Available in 18+ Languages Section */}
      <section className="w-full bg-[#e9ecef] py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#04344a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xl font-bold text-[#04344a]">Available in 18+ Languages</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-4">
              {[
                { code: 'GB', name: 'English' },
                { code: 'IN', name: 'हिंदी' },
                { code: 'IN', name: 'தமிழ்' },
                { code: 'IN', name: 'తెలుగు' },
                { code: 'IN', name: 'మరాఠీ' },
                { code: 'IN', name: 'ગુજરાતી' },
                { code: 'IN', name: 'বাংলা' },
                { code: 'IN', name: 'ಕನ್ನಡ' },
                { code: 'IN', name: 'മലയാളം' },
                { code: 'IN', name: 'ਪੰਜਾਬੀ' },
                { code: 'PK', name: 'اردو' },
                { code: 'IN', name: 'অসমীয়া' },
                { code: 'IN', name: 'ଓଡ଼ିଆ' },
                { code: 'IN', name: 'संस्कृत' },
                { code: 'FR', name: 'Français' },
                { code: 'DE', name: 'Deutsch' },
                { code: 'ES', name: 'Español' },
                { code: 'SA', name: 'العربية' },
                { code: '+8', name: 'More' },
              ].map((lang, i) => (
                <span key={i} className="inline-flex items-center px-4 py-2 rounded-full font-semibold text-white text-sm" style={{background: 'linear-gradient(90deg, #6a98af 0%, #b0c4d4 100%)', border: '1px solid #b0c4d4'}}>
                  <span className="mr-2 font-bold">{lang.code}</span>
                  <span>{lang.name}</span>
                </span>
              ))}
            </div>
            <p className="text-[#04344a] text-center text-base max-w-2xl mx-auto">Breaking language barriers to make quality education accessible to everyone</p>
          </div>
        </div>
      </section>
    </main>
  );
}