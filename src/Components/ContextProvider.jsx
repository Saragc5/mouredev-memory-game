import React, { 
  useContext, useEffect, useState, createContext, useMemo,
} from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe utilizarse dentro de un AppProvider");
  }
  return context;
};

export default function AppProvider({ children }) {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleCountMovements = () => {
    if (!clicked) {
      setClicked(true);
      setCount(count + 1);
    }
  };

  useEffect(() => {
    handleCountMovements();
  }, [count]);

  const contextValue = useMemo(() => ({ count, setCount, handleCountMovements }), [count]);
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
