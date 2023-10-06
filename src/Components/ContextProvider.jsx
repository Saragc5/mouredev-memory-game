import React from 'react';

export default function AppProvider({ children }) {
  return (
    <AppProvider.Provider>
      {children}
    </AppProvider.Provider>
  );
}
