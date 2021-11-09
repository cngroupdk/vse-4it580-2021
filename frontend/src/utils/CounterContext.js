import React from 'react';

export const CounterContext = React.createContext({
  counter: 0,
  increment: () => {
    console.error('Error: using default implementation!');
  },
});
