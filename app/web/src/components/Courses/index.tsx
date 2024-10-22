import React, { useState } from 'react';
import courses from './courses.json';
import CourseItem from '../CourseItem';

interface CourseProps {
  selection: string[];
  setSelection: React.Dispatch<React.SetStateAction<string[]>>;
}

const Courses: React.FC<CourseProps> = ({ selection, setSelection }) => {
  // const randomCourses = courses;

  const handleSelection = (name: string) => {
    const currentSelection = selection;
    let newSelection = [];
    if(selection.includes(name)){
      newSelection = currentSelection.filter(el => el !== name);
    } else {
      newSelection = [...currentSelection, name];
    }
    setSelection(newSelection)
  }

  return courses.map((course) => {
    const isSelected = selection.some((name) => name === course.name);
    let choice;
    if(isSelected){
      choice = (selection.findIndex(el => el === course.name)) + 1;
    }
    return (
      <CourseItem
        handleSelection={handleSelection}
        disabled={!isSelected && selection.length > 2}
        key={course.id} 
        selected={isSelected}
        choice={choice} 
        name={course.name} 
        image={course.bg} 
      />
    );
  });
}

export default Courses;