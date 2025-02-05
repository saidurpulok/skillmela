import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      {/* Dashboard Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Welcome, John Doe!
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Here&apos;s an overview of your learning journey.
        </p>
      </header>

      {/* Profile & Metrics Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Profile Card */}
        <Card className="p-6 shadow rounded-lg flex items-center space-x-4">
          <div className="relative w-16 h-16">
            <Image
              src="/avatar-placeholder.png"
              alt="User Avatar"
              fill
              sizes="64px"
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              John Doe
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              john.doe@example.com
            </p>
          </div>
        </Card>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 gap-6">
          <Card className="p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Enrolled Courses</h2>
            <p className="text-3xl font-bold text-indigo-600">5</p>
          </Card>
          <Card className="p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Completed Lessons</h2>
            <p className="text-3xl font-bold text-indigo-600">23</p>
          </Card>
        </div>
      </section>

      {/* My Courses Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          My Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Course Card */}
          <Card className="p-4 shadow rounded-lg">
            <div className="relative w-full h-40 rounded-md mb-4">
              <Image
                src="/course-placeholder.png"
                alt="Course Thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Introduction to Modern UI
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Get an overview of modern design principles.
            </p>
            <Button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow hover:shadow-xl transition-all">
              Continue Course
            </Button>
          </Card>

          {/* Additional Course Card */}
          <Card className="p-4 shadow rounded-lg">
            <div className="relative w-full h-40 rounded-md mb-4">
              <Image
                src="/course-placeholder.png"
                alt="Course Thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Advanced JavaScript
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Deep dive into advanced JavaScript concepts.
            </p>
            <Button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow hover:shadow-xl transition-all">
              Continue Course
            </Button>
          </Card>

          {/* More course cards could be added here */}
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Recent Activity
        </h2>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-2">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                You
              </span>{" "}
              completed Lesson 3 in &quot;Introduction to Modern UI&quot;.
            </li>
            <li className="py-2">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                You
              </span>{" "}
              earned a badge in &quot;Advanced JavaScript&quot;.
            </li>
            <li className="py-2">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                You
              </span>{" "}
              started a new course: &quot;UI/UX Design Essentials&quot;.
            </li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center">
        <Button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all">
          Explore More Courses
        </Button>
      </section>
    </div>
  );
}
