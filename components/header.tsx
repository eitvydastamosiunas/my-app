import React from 'react';
import styles from '../styles/Home.module.css';

export const Header = ({ text } :{ text: string }) => {
  return (
    <h1 className={styles.title}>
      {text}
    </h1>
  )
}