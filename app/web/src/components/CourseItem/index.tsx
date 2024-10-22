import React, { useState } from 'react';
import styles from './style.module.css'

interface CourseItemProps {
  handleSelection: (name: string) => void;
  selected?: boolean;
  disabled?: boolean;
  choice?: number;
  name: string;
  image: string;
}

const CourseItem: React.FC<CourseItemProps> = ({ selected = false, disabled = false, choice, name, image, handleSelection }) => {
  const [isSelected, setIsSelect] = useState<boolean>(selected);
  return (<div 
      className={`${styles.container} ${(disabled ? styles.disabled : '')}`} 
      onClick={() => {
        setIsSelect(!isSelected);
        handleSelection(name);
      }} 
      data-selected={isSelected}
    > 
            <div className={`${styles.choice} ${isSelected ? styles[`choice${choice}`] : ''}`}>{choice}º</div>
            <label>{name}</label>
            <div style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '64px',
              minWidth: '128px',
              width: '100%',
              borderRadius: '8px', 
            }} />
          </div>);
}

export default CourseItem;