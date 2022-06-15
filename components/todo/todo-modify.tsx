import React, { useEffect, useState, createRef } from 'react';
import styles from '../../styles/todo.module.css'
import { ITodo } from './todo.model';

export interface ITodoModifyProps {
  todo: ITodo;
  index: number;
  updateTodo: (todo: ITodo) => void;
  toggleEdit: () => void;
  toggleDialog: () => void;
  setSelectedIndex: (index: number) => void;
}

export const TodoModify = (props: ITodoModifyProps) => {
  const { todo, index, updateTodo, toggleEdit, toggleDialog, setSelectedIndex } = props;
  const [ text, setText ] = useState<string>(todo.text)

  var ref = createRef<HTMLInputElement>();

  useEffect(() => {
    ref.current?.focus();
  }, [])

  const onEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && e.key === "Enter") {
      if (text !== todo.text) {
        const copy = {...todo};
        copy.text = text;
        updateTodo(copy);
      }
      toggleEdit();
    }
  }

  const onDeleteClick = () => {
    setSelectedIndex(index);
    toggleDialog();
  }

  return (
  <div className={styles.todo}>
    <input type='text' className={styles.editTodoTextInput} ref={ref} onKeyUp={onKeyPress} onChange={onEditChange} value={text} />
    <span className={styles.removeTodo} onClick={onDeleteClick}>❌</span>
  </div>
  );
}