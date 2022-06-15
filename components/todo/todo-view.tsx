import React from 'react';
import styles from '../../styles/todo.module.css'
import { ITodo } from './todo.model';

export interface ITodoViewProps {
  todo: ITodo;
  index: number;
  updateTodo: (todo: ITodo) => void;
  toggleEdit: () => void;
  setSelectedIndex: (index: number) => void;
}

export const TodoView = (props: ITodoViewProps) => {
  const { todo, index, updateTodo, toggleEdit, setSelectedIndex }  = props;

  const onCheck = () => {
    setSelectedIndex(index);
    const copy = {...todo};
    copy.done = !copy.done;
    updateTodo(copy);
  }

  const setToEdit = () => {
    setSelectedIndex(index);
    toggleEdit();
  }

  let todoText = <span className={styles.todoText} onClick={setToEdit}>{todo.text}</span>;
  if (todo.done) {
    todoText = <s><span className={styles.todoDone}>{todo.text}</span></s>
  }

  return (
  <div className={styles.todo}>
    <input type="checkbox" className={styles.todoCheckbox} onChange={onCheck} checked={todo.done}/>
    {todoText}
  </div>
  );
}