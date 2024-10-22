import React from 'react';
import styles from './style.module.css'

interface CourseItemProps {
  selected?: boolean;
  disabled?: boolean;
  choice?: 1 | 2 | 3;
  name: string;
  image: string;
}

const CourseItem: React.FC<CourseItemProps> = ({ selected = false, disabled = false, choice, name, image }) => {
  return (<div className={`${styles.container} ${(disabled ? styles.disabled : '')}`}> 
            <div className={`${styles.choice} ${selected ? styles[`choice${choice}`] : ''}`}>{choice}º</div>
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