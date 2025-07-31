'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#00334e] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="/images/logo.jpg" 
                alt="Visdom Wave Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-[#5588a3] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#5588a3] transition-colors">
              About
            </Link>
            <Link href="/patents" className="hover:text-[#5588a3] transition-colors">
              Patents
            </Link>
            <Link href="/contact" className="hover:text-[#5588a3] transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/signin" 
              className="text-white hover:text-[#5588a3] transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="bg-[#5588a3] hover:bg-[#145374] px-4 py-2 rounded-md transition-colors"
            >
              Start Learning
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#5588a3] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#00334e] border-t border-[#145374]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-[#5588a3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-[#5588a3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/patents" 
                className="block px-3 py-2 text-white hover:text-[#5588a3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Patents
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-white hover:text-[#5588a3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/signin" 
                className="block px-3 py-2 text-white hover:text-[#5588a3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className="block px-3 py-2 bg-[#5588a3] hover:bg-[#145374] text-white rounded-md mx-3 text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Learning
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}