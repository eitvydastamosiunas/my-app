import React from 'react';
import styles from '../styles/todo.module.css'

export interface IDialogProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

export const Dialog = (props: IDialogProps) => {
  const { isOpen } = props;

  return (
  <dialog className={styles.dialog} open={isOpen}>
    {props.children}
  </dialog>
  );
};