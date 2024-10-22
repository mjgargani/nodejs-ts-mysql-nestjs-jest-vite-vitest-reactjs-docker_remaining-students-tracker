import React from 'react';
import courses from './courses.json';
import CourseItem from '../CourseItem';

interface CourseProps {
  selection: [number, number][];
}

const Courses: React.FC<CourseProps> = ({ selection }) => {
  const randomCourses = courses.sort(() => Math.random() - 0.5);
  return randomCourses.map((course) => {
    const isSelected = selection.some(([id]) => id === course.id);
    return (
      <CourseItem key={course.id} selected={isSelected}  name={course.name} image={course.bg} />
    );
  });
}

export default Courses;