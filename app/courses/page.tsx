"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dummy courses data
const coursesData = [
  {
    id: 1,
    title: "Introduction to Modern UI",
    description: "Get an overview of modern design principles.",
    category: "Design",
    thumbnail: "/course-placeholder.png",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into advanced JavaScript concepts.",
    category: "Development",
    thumbnail: "/course-placeholder.png",
  },
  {
    id: 3,
    title: "Digital Marketing Fundamentals",
    description: "Learn the basics of digital marketing and SEO.",
    category: "Marketing",
    thumbnail: "/course-placeholder.png",
  },
  {
    id: 4,
    title: "Business Analytics",
    description: "Analyze data to drive business decisions.",
    category: "Business",
    thumbnail: "/course-placeholder.png",
  },
  {
    id: 5,
    title: "UI/UX Design Essentials",
    description:
      "Master the principles of user interface and experience design.",
    category: "Design",
    thumbnail: "/course-placeholder.png",
  },
  {
    id: 6,
    title: "Full-Stack Web Development",
    description: "Become a full-stack developer with modern frameworks.",
    category: "Development",
    thumbnail: "/course-placeholder.png",
  },
  // Add more courses as needed...
];

const categories = [
  "All",
  "Programming",
  "Design",
  "Business",
  "Marketing",
  "Data Science",
  "AI & ML",
  "Web Development",
  "Mobile Development",
  "DevOps",
  "Cybersecurity",
  "Cloud Computing",
  "Blockchain",
  "Game Development",
  "Digital Marketing",
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter courses based on search query and selected category.
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-8">
          Browse Courses
        </h1>

        {/* Search and Category Filters */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Scrollable Categories */}
          <div className="relative max-w-full">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll("left")}
                className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-100"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-2 px-8 no-scrollbar"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className="px-4 py-2 text-sm whitespace-nowrap rounded-full"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll("right")}
                className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-100"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mt-8">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <div className="flex flex-col h-full bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-white/20 cursor-pointer">
                    <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {course.description}
                    </p>
                    <Button className="mt-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow hover:shadow-xl transition-all">
                      View Course
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              No courses found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
