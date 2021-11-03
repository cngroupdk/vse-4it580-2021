import React, { useReducer } from 'react';
import { SmallButton } from 'src/atoms/';

import { TodoListItem } from '../molecules/';
import { initialState, todoReducer } from '../reducers/todoReducer';

export function TodoListPage() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>TODO List</h1>
      <SmallButton
        colorScheme="green"
        onClick={() => {
          dispatch({ type: 'ADD', title: 'Hello, Taco!' });
        }}
      >
        Add
      </SmallButton>
      <div>
        {state.todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}
