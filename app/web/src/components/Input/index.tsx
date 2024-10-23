import React from 'react';
import styles from './style.module.css';

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({ value, onChange, required = false, maxLength }) => {
  return <input required={required} maxLength={maxLength} type='text' className={styles.input} value={value} onChange={onChange} />;
}

export default Input;