export const initialState = {
  lastId: 2,
  todos: [
    { id: 1, title: 'Buy Taco 321', done: true },
    { id: 2, title: 'Eat Taco 321', done: false },
  ],
};

export function todoReducer(state, action) {
  console.log('action', action);
  switch (action.type) {
    case 'ADD': {
      // { type: 'ADD', title: 'Hello' }
      const { title } = action;
      const id = state.lastId + 1;

      const newTodo = { id, title, done: false };

      return {
        ...state,
        lastId: newTodo.id,
        todos: [...state.todos, newTodo],
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
    default:
      console.error('Unknown action:', action);
      return state;
  }
}
