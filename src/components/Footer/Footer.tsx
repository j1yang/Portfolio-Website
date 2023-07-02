import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className={styles.footer}>
      <p>{text}</p>
    </footer>
  );
};

export default Footer;