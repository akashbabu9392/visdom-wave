import { CheckCircle, Lightbulb, Target, Award, Rocket, Users, Globe, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00334e] to-[#145374] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              WELCOME TO VISDOM WAVE
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Don't limit yourself to learning
              </h2>
              <p className="text-gray-200 leading-relaxed mb-6">
                Welcome to Visdom Wave, where we're revolutionizing education for Industry 4.0. Founded by passionate educators and AI experts, we're dedicated to creating immersive, concept-based learning experiences. From AI to advanced robotics, we break the mold with game-changing simulations, and simulations, making education enjoyable. Our innovative tools empower students to thrive and excel, fostering an accessible way to learn for all. Join us on this journey of an adventure, and we're here to make it happen.
              </p>
              <button className="bg-[#5588a3] hover:bg-white hover:text-[#00334e] px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-[#145374] rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#00334e] rounded-full"></div>
                </div>
                <p className="text-sm text-gray-300">AI Mascot Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#00334e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Vision & Mission</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Guiding principles that shape our journey and define our purpose.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#145374] p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#5588a3] rounded-lg mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation at its Core</h3>
              <p className="text-gray-300">Constantly pushing boundaries to bring you the future, today.</p>
            </div>
            
            <div className="bg-[#145374] p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#5588a3] rounded-lg mx-auto mb-6 flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Impact</h3>
              <p className="text-gray-300">Creating solutions that transcend borders and transform education worldwide.</p>
            </div>
            
            <div className="bg-[#145374] p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#5588a3] rounded-lg mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">Constantly pushing boundaries with creative solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00334e] mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we turn ideas into reality, step by step</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Discovery",
                description: "We begin by understanding your unique vision and challenges."
              },
              {
                icon: Target,
                title: "Ideation",
                description: "Our team transforms problems into meaningful solutions."
              },
              {
                icon: Rocket,
                title: "Development",
                description: "We build robust, scalable solutions with cutting-edge technology."
              },
              {
                icon: TrendingUp,
                title: "Launch",
                description: "We deploy your solution and ensure a smooth transition."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#e8e8e8] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <step.icon className="h-10 w-10 text-[#5588a3]" />
                </div>
                <h3 className="text-xl font-bold text-[#00334e] mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Milestones */}
      <section className="py-16 bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00334e] mb-4">Our Milestones</h2>
            <p className="text-xl text-gray-600">Celebrating our journey and achievements along the way.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                number: "25+",
                label: "Awards Won"
              },
              {
                icon: Rocket,
                number: "150+",
                label: "Projects Completed"
              },
              {
                icon: Users,
                number: "50+",
                label: "Team Members"
              },
              {
                icon: TrendingUp,
                number: "5+",
                label: "Years Experience"
              }
            ].map((milestone, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <milestone.icon className="h-12 w-12 text-[#5588a3] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#00334e] mb-2">{milestone.number}</div>
                <div className="text-gray-600 font-medium">{milestone.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00334e] mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600">Our core values that guide everything we do</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#00334e] to-[#145374] rounded-2xl p-12 text-center text-white">
              <Lightbulb className="h-16 w-16 text-[#5588a3] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Constantly pushing boundaries with creative solutions
              </p>
              
              <div className="flex justify-center mt-8 space-x-2">
                <div className="w-3 h-3 bg-[#5588a3] rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}