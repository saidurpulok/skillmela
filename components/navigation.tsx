"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gray-900 border-b border-blue-200 dark:border-gray-700 shadow-sm sticky top-0 z-50 transition-colors backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link
              href="/"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"
            >
              SkillMela
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-6">
              <Link
                href="/dashboard"
                className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/auth/login"
                className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 transition-colors focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/dashboard"
              className="block text-gray-800 dark:text-gray-200 hover:text-indigo-600 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/auth/login"
              className="block text-gray-800 dark:text-gray-200 hover:text-indigo-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="block text-gray-800 dark:text-gray-200 hover:text-indigo-600 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
