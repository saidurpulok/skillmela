import React from "react";

interface LessonProps {
  params: { id: string };
}

export default function LessonPage({ params }: LessonProps) {
  return (
    <div>
      <h1>Lesson {params.id}</h1>
      {/* Display lesson content dynamically */}
    </div>
  );
}
