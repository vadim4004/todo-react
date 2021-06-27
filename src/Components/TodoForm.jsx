import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';
import { addTodo } from '../redux/actions';

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import '../App.css';

export const TodoForm = () => {
  const [userValue, setUserValue] = useState('');
  let dispatch = useDispatch();

  const onHandleChange = (e) => {
    setUserValue(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        id: uuid(),
        name: userValue,
      })
    );
    setUserValue('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete={'off'}>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Todo</InputLabel>
        <span className="form-items">
          <OutlinedInput
            id="component-outlined"
            autoFocus={true}
            placeholder="Todo"
            label="Name"
            value={userValue}
            onChange={onHandleChange}
            required={true}
            className="form-input"
          />
          <Button
            type="submit"
            color="primary"
            aria-label="add"
            className="button-add"
          >
            <AddIcon />
          </Button>
        </span>
      </FormControl>
    </form>
  );
};
