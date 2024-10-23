import React from 'react';
import styles from './style.module.css';

interface ButtonProps {
  selected?: boolean; 
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({selected = false, disabled = false, children, onClick, type}) => {
  return (<button className={`${selected ? styles.focus : ''} ${styles.button} ${(disabled ? styles.disabled : '')}`} onClick={onClick} type={type}>{children}</button>);
}

export default Button;