import React from 'react';
import styles from './style.module.css';
import ETECLogo from '../../assets/etec_logo.png';
import CPSLogo from '../../assets/cps_logo.png';

const Header: React.FC = () => {
  return (<header className={styles.header}>
    <img src={ETECLogo} alt="ETEC Logo" />
    <img src={CPSLogo} alt="CPS Logo" />
  </header>);
}

export default Header;