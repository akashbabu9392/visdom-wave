import { BookOpen, FileText, GraduationCap, School, Search, Download, Eye } from 'lucide-react';

export default function StudyMaterials() {
  const materials = [
    {
      icon: BookOpen,
      title: "NCERT Textbooks",
      description: "Complete collection of NCERT textbooks for all classes and subjects. Access the latest editions with comprehensive content covering the entire syllabus.",
      subjects: "Mathematics, Science, Social Studies, English, Hindi",
      classes: "Class 1-12"
    },
    {
      icon: FileText,
      title: "NCERT Solutions",
      description: "Detailed step-by-step solutions for all NCERT textbook exercises. Perfect for understanding concepts and exam preparation.",
      subjects: "All NCERT Subjects",
      classes: "Class 1-12"
    },
    {
      icon: GraduationCap,
      title: "CBSE Materials",
      description: "Comprehensive CBSE study materials including sample papers, previous year question papers, and marking schemes.",
      subjects: "All CBSE Subjects",
      classes: "Class 1-12"
    },
    {
      icon: School,
      title: "State Boards",
      description: "Study materials for various state board curricula including textbooks, guides, and practice materials tailored to state-specific syllabi.",
      subjects: "State-specific Subjects",
      classes: "Class 1-12"
    }
  ];

  return (
    <main className="min-h-screen bg-[#e8e8e8]">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#00334e] to-[#145374] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Study Materials</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Access comprehensive study materials, textbooks, and resources for all major curricula and classes
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search for textbooks, solutions, or materials..."
                className="w-full px-6 py-4 pl-12 bg-white text-[#00334e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5588a3]"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[#e8e8e8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <material.icon className="h-8 w-8 text-[#5588a3]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#00334e] mb-3">{material.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{material.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm">
                        <span className="font-medium text-[#00334e] w-20">Subjects:</span>
                        <span className="text-gray-600">{material.subjects}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium text-[#00334e] w-20">Classes:</span>
                        <span className="text-gray-600">{material.classes}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex items-center space-x-2 bg-[#5588a3] hover:bg-[#145374] text-white px-4 py-2 rounded-lg transition-colors">
                        <Eye className="h-4 w-4" />
                        <span>View</span>
                      </button>
                      <button className="flex items-center space-x-2 bg-[#00334e] hover:bg-[#145374] text-white px-4 py-2 rounded-lg transition-colors">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#00334e] mb-12">
            Quick Access by Class
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, index) => (
              <button
                key={index}
                className="bg-[#e8e8e8] hover:bg-[#5588a3] hover:text-white p-4 rounded-lg text-center font-semibold text-[#00334e] transition-colors"
              >
                Class {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-16 bg-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#00334e] mb-12">
            Popular Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Class 10 NCERT Science",
                downloads: "50K+ Downloads",
                type: "Textbook"
              },
              {
                title: "Class 12 Mathematics Solutions",
                downloads: "45K+ Downloads", 
                type: "Solutions"
              },
              {
                title: "CBSE Sample Papers 2024",
                downloads: "40K+ Downloads",
                type: "Practice Papers"
              },
              {
                title: "Class 9 Social Science",
                downloads: "35K+ Downloads",
                type: "Textbook"
              },
              {
                title: "Physics Class 11 Solutions",
                downloads: "30K+ Downloads",
                type: "Solutions"
              },
              {
                title: "English Grammar Guide",
                downloads: "28K+ Downloads",
                type: "Reference"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-[#00334e] mb-2">{resource.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span className="bg-[#e8e8e8] px-2 py-1 rounded">{resource.type}</span>
                  <span>{resource.downloads}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#5588a3] hover:bg-[#145374] text-white py-2 rounded transition-colors">
                    View
                  </button>
                  <button className="flex-1 bg-[#00334e] hover:bg-[#145374] text-white py-2 rounded transition-colors">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#00334e] to-[#145374] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need More Resources?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join our learning platform to access thousands of additional study materials, interactive content, and personalized learning paths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#5588a3] hover:bg-white hover:text-[#00334e] px-8 py-3 rounded-lg font-semibold transition-colors">
              Sign Up for Free Access
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#00334e] px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}