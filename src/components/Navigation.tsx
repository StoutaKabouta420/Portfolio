'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-400">
          Jacob Love
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link href="/passions" className="hover:text-blue-400 transition">Passions</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 left-0 bg-gray-900 p-4 z-50 border-b border-gray-800">
            <div className="flex flex-col space-y-3">
              <Link href="/about" className="hover:text-blue-400 transition">About</Link>
              <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
              <Link href="/passions" className="hover:text-blue-400 transition">Passions</Link>
              <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;