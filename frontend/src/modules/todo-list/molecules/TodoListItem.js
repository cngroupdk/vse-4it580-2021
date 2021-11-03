import React from 'react';

import { SmallButton } from 'src/atoms/';
import { setTodoDone, deleteTodo, setTodoTitle } from '../reducers/todoReducer';

export function TodoListItem({ todo, dispatch }) {
  return (
    <div className="flex items-center bg-light-gray br2 pa1 mb1">
      <input
        className="mr1"
        type="checkbox"
        checked={todo.done}
        onChange={() => dispatch(setTodoDone(todo.id, !todo.done))}
      />
      <input
        className="flex-auto mr1 bn bg-transparent"
        value={todo.title}
        onChange={(event) =>
          dispatch(setTodoTitle(todo.id, event.target.value))
        }
      />
      <SmallButton
        colorScheme="red"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </SmallButton>
    </div>
  );
}
