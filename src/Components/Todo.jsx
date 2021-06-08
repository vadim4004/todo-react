import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import '../App.css';
import { TextField } from '@material-ui/core';

export const Todo = ({ todo, completeTask, removeTask }) => {
  let dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);

  let onClickEdit = () => {
    dispatch(updateTodo({ name: name }));
    if (editable) {
      setName(todo.name);
    }
    setEditable(!editable);
  };

  let onChangeEdit = (e) => setName(e.target.value);

  return (
    <div className="todo-item">
      <div
        className={todo.isDone ? 'item-text strike-out' : 'item-text'}
        // onClick={() => completeTask(todo.id)}
      >
        {editable ? (
          // <TextField id="outlined-basic" label="Edit" variant="outlined" />
          <input
            type="text"
            autoFocus={true}
            className=""
            value={name}
            onChange={onChangeEdit}
          />
        ) : (
          todo.name
        )}
      </div>
      <div>
        <EditIcon onClick={onClickEdit} />
      </div>
      <div
        className="delete-item"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        <DeleteIcon />
      </div>
    </div>
  );
};
