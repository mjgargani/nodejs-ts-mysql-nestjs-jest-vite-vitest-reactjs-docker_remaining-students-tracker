import React from 'react';
import Input from '../Input';
import style from './style.module.css'

interface LabeledInputProps {
  disabled?: boolean;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const LabeledInput: React.FC<LabeledInputProps> = ({ disabled = false, label, value, onChange  }) => {
  return (<div className={`${style.container} ${(disabled ? style.disabled : '')}`}>
    <label>{label}</label>
    <Input value={value} onChange={onChange} />
  </div>);
}

export default LabeledInput;