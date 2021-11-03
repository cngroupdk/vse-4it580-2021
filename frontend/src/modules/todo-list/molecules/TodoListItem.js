import React from 'react';
import { SmallButton } from 'src/atoms/';
import { todoReducer } from '../reducers/todoReducer';

export function TodoListItem({ todo, dispatch }) {
  return (
    <div className="flex items-center bg-light-gray br2 pa1 mb1">
      <input
        className="mr1"
        type="checkbox"
        checked={todo.done}
        onChange={() => {
          dispatch({ type: 'SET_DONE', id: todo.id, done: !todo.done });
        }}
      />
      <input
        className="bg-transparent flex-auto bn mr1"
        type="text"
        value={todo.title}
        onChange={() => {}}
      />
      <SmallButton
        colorScheme="red"
        onClick={() =>
          dispatch({
            type: 'DELETE',
            id: todo.id,
          })
        }
      >
        Delete
      </SmallButton>
    </div>
  );
}
