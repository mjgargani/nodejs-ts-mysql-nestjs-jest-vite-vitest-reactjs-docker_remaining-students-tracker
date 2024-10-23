import React from 'react';
import Button from '../Button';
import styles from './styles.module.css';

interface NpsProps {
  nps: number;
  setNps: React.Dispatch<React.SetStateAction<number>>;
}
const Nps: React.FC<NpsProps> = ({nps, setNps}) => {
  return (<div className={styles.container}>
    <Button selected={nps === 5} type="button" onClick={() => setNps(5)}>😍</Button>
    <Button selected={nps === 4} type="button" onClick={() => setNps(4)}>😄</Button>
    <Button selected={nps === 3} type="button" onClick={() => setNps(3)}>😐</Button>
    <Button selected={nps === 2} type="button" onClick={() => setNps(2)}>🙁</Button>
    <Button selected={nps === 1} type="button" onClick={() => setNps(1)}>😭</Button>
  </div>);
}

export default Nps;