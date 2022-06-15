import React, { useState } from 'react';
import { ITodoModifyProps, TodoModify } from './todo-modify';
import { ITodoViewProps, TodoView } from './todo-view';
import { ITodo } from './todo.model';

export interface ITodoProps {
  todo: ITodo;
  index: number;
  updateTodo: (todo: ITodo) => void;
  toggleDialog: () => void;
  setSelectedIndex: (index: number) => void;
}

export const Todo = (props: ITodoProps) => {
  const { index, todo, updateTodo, toggleDialog, setSelectedIndex } = props;
  const [isEditMode, setEditMode] = useState(false);

  const toggleEdit = () => {
    setEditMode(!isEditMode);
  }

  const modifyProps: ITodoModifyProps = {index, todo, updateTodo, toggleDialog, setSelectedIndex, toggleEdit}
  const viewProps: ITodoViewProps = {index, todo, updateTodo, setSelectedIndex, toggleEdit};

  return (
  <>  
    {isEditMode 
      ? <TodoModify {...modifyProps} /> 
      : <TodoView {...viewProps} />
    }
  </>
  );
}