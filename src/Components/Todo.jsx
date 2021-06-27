import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import '../App.css';

export const Todo = ({ todo }) => {
  let dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);

  let onClickEdit = () => {
    if (editable) {
      setName(todo.name);
    }
    setEditable(!editable);
  };

  const onBlurEdit = () => {
    const newObj = {
      id: todo.id,
      name: name,
    };
    dispatch(updateTodo(newObj));
  };

  let onChangeEdit = (e) => setName(e.target.value);

  return (
    <div className="todo-item">
      <div className="item-text">
        {editable ? (
          <input
            type="text"
            autoFocus={true}
            className="form-input-edit"
            value={name}
            onChange={onChangeEdit}
            onBlur={(e) => onBlurEdit()}
          />
        ) : (
          todo.name
        )}
      </div>
      <div>
        {editable ? (
          <DoneIcon onClick={onClickEdit} />
        ) : (
          <EditIcon onClick={onClickEdit} />
        )}
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
