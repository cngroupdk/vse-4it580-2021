export const initialState = {
  lastId: 2,
  todos: [
    { id: 1, title: 'Buy Taco 123', done: true },
    { id: 2, title: 'Eat Taco 123', done: false },
  ],
};

export function todoReducer(state, action) {
  console.log('action', action);
  switch (action.type) {
    case 'ADD': {
      const { title } = action;
      const id = state.lastId + 1;

      const newTodo = { id, title, done: false };

      return {
        ...state,
        lastId: newTodo.id,
        todos: [newTodo, ...state.todos],
      };
    }

    case 'SET_DONE': {
      const { id, done } = action;

      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, done };
          }
          return todo;
        }),
      };
    }

    case 'DELETE': {
      const { id } = action;

      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    }

    case 'SET_TITLE': {
      const { id, title } = action;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, title };
          }

          return todo;
        }),
      };
    }

    default:
      console.error('Unknown action:', action);
      return state;
  }
}

/// -- action creators -- ///

export function addTodo(title) {
  return { type: 'ADD', title };
}

export function deleteTodo(id) {
  return { type: 'DELETE', id };
}

export function setTodoDone(id, done) {
  return { type: 'SET_DONE', id, done };
}

export function setTodoTitle(id, title) {
  return { type: 'SET_TITLE', id, title };
}
