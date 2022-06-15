import React, { useState } from 'react';
import styles from '../../styles/todo.module.css';
import { ITodo } from './todo.model';
import { uuidv4 } from '../../helpers/utils';

export interface IAddTodo {
  addTodo: (todo: ITodo) => void;
}

export const AddTodo = (props: IAddTodo) => {
  const [todo, setTodo] = useState('');

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && e.key === "Enter") {
      if (todo !== '') {
        props.addTodo({ text: todo, done: false, id: uuidv4() });
        setTodo('');
      }
    }
  }

  return (
    <div className={styles.addTodo}>
      <input className={styles.addTodoInput} type="text" onChange={onTextChange}  onKeyPress={onKeyPress} placeholder='Type and press enter' value={todo}></input>
    </div>
  );
}