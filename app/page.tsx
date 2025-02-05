import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            // "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            "url('bg-2.jpg')",
        }}
      >
        {/* Animated gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black opacity-10"></div> */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-500/80 to-blue-100 opacity-10"></div>
        <div className="relative z-10 text-center px-4 sm:px-6">
          {/* Logo with animated gradient text */}
          <h1 className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-lg animate-gradient">
            SkillMela
          </h1>
          <p className="mt-6 text-blue-400 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md">
            Learn and grow with curated micro‑lessons designed for busy
            professionals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href={"/auth/register"}>
              <Button className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all transform">
                Get Started
              </Button>
            </Link>
            <Link href={"/courses"}>
              <Button
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 border-white text-white bg-transparent rounded-full hover:bg-white hover:text-indigo-600 hover:scale-105 transition-all transform"
              >
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Transform Your Learning
          </h2>
          <p className="text-center text-gray-700 max-w-xl mx-auto mb-12 text-lg">
            Explore interactive lessons, track your progress, and unlock your
            potential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 border border-white/20">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Interactive Lessons
              </h3>
              <p className="text-gray-600">
                Bite‑sized lessons crafted to fit your busy schedule with
                engaging content.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 border border-white/20">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Progress Tracking
              </h3>
              <p className="text-gray-600">
                Visualize your learning journey with intuitive dashboards and
                analytics.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 border border-white/20">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Earn Certificates
              </h3>
              <p className="text-gray-600">
                Get recognized for your achievements with industry‑relevant
                certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            What Our Learners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 border border-white/20">
              <p className="text-gray-700 italic mb-6 text-lg">
                &quot;SkillMela has revolutionized my learning experience. The
                micro‑lessons are concise and actionable!&quot;
              </p>
              <h4 className="text-xl font-bold text-indigo-600">
                – Alex Johnson, Data Analyst
              </h4>
            </div>
            <div className="p-8 bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 border border-white/20">
              <p className="text-gray-700 italic mb-6 text-lg">
                &quot;The progress tracking dashboard keeps me motivated, and
                the content is always top‑notch.&quot;
              </p>
              <h4 className="text-xl font-bold text-indigo-600">
                – Maria Garcia, Marketing Specialist
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* CALL‑TO‑ACTION SECTION */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Ready to Elevate Your Skills?
          </h2>
          <Button className="px-10 py-5 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all transform">
            Join Now
          </Button>
        </div>
      </section>
    </>
  );
}
