import React from 'react';
import { ITodo } from './todo.model';
import styles from '../../styles/todo.module.css';

export const TodoCount = ({ todos }: {todos: ITodo[] }) => {
  const leftTodos = todos.filter(x => !x.done);

  if (todos.length == 0) {
    return <div className={styles.todoCount}>You have no todos! 😢</div>
  }
  
  if (leftTodos.length > 0)
    return <div className={styles.todoCount}>You have {leftTodos.length} todos left! 🤹‍♂️</div>
  else {
    return <div className={styles.todoCount}>Well done! You completed all your todos! 💪</div>
  }
}