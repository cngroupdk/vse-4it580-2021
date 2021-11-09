import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ScrollToTop } from 'src/atoms/';
import { AuthProvider } from 'src/utils/auth';
import { EnhancedApolloProvider } from 'src/utils/apollo';
import { Routes } from 'src/Routes';
import { CounterContext } from 'src/utils/CounterContext';

export function App() {
  const [counter, setCounter] = useState(0);

  return (
    <BrowserRouter>
      <AuthProvider>
        <EnhancedApolloProvider>
          <CounterContext.Provider
            value={{
              counter,
              increment: () => {
                setCounter(counter + 1);
              },
            }}
          >
            <ScrollToTop />
            <Routes />
          </CounterContext.Provider>
        </EnhancedApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
