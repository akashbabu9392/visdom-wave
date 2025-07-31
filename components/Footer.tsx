import Link from 'next/link';
import { Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#00334e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Study Materials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Study Materials</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/study-materials" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  NCERT Textbooks
                </Link>
              </li>
              <li>
                <Link href="/study-materials" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  NCERT Solutions
                </Link>
              </li>
              <li>
                <Link href="/study-materials" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  CBSE Materials
                </Link>
              </li>
              <li>
                <Link href="/study-materials" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  Bank Exams
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  Learning Network
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  Discussion Forum
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  Study Groups
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  What Makes Us Different?
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Corporate Office Mumbai</span>
              </li>
              <li>
                <span className="text-gray-300">Get in Touch Worldwide</span>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  Write Your Review
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors">
                  Support Center
                </Link>
              </li>
            </ul>
            <div className="mt-4 space-y-1">
              <p className="text-gray-300 text-sm">📍 Mumbai, Maharashtra, India</p>
              <p className="text-gray-300 text-sm">✉️ hello@visdomwave.com</p>
              <p className="text-gray-300 text-sm">📞 +91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#145374] mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <Link href="/">
                <img 
                  src="/images/logo.jpg" 
                  alt="Visdom Wave Logo" 
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>
            
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <p className="text-gray-300 text-sm">
                Empowering the next generation with AI-powered education for a brighter future.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Backed by IIT Alumni • Made in India 🇮🇳
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#5588a3] transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-4 border-t border-[#145374]">
            <p className="text-gray-400 text-sm">
              © 2024 Visdom Wave. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <Link href="#" className="text-gray-400 hover:text-[#5588a3] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#5588a3] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#5588a3] text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}