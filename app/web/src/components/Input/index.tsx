import React from 'react';
import styles from './style.module.css';

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return <input type='text' className={styles.input} value={value} onChange={onChange} />;
}

export default Input;