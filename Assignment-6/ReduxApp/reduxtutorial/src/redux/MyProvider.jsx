import React, { createContext, useContext } from "react";

const Context = createContext(null);
export default function MyProvider({ children, store }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export const useStore = () => {
  const store = useContext(Context);
  return store;
};
