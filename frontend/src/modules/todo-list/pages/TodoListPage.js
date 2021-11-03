import React, { useReducer } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { SmallButton } from 'src/atoms/';

import { TodoListItem } from '../molecules/';
import { initialState, todoReducer, addTodo } from '../reducers/todoReducer';

export function TodoListPage() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>TODO List</h1>
      <SmallButton
        colorScheme="green"
        onClick={() => dispatch(addTodo('Hello'))}
      >
        Add
      </SmallButton>
      <AnimatePresence initial={false}>
        {state.todos.map((todo) => (
          <motion.div
            key={todo.id}
            layout
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <TodoListItem todo={todo} dispatch={dispatch} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
