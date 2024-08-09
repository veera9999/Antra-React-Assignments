import { useEffect, useState } from "react";
// import store from ".";
import { useStore } from "./MyProvider";

export function useMySelector(selectorFn) {
  const store = useStore();
  const [selectedState, setSelectedState] = useState(
    selectorFn(store.getState())
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setSelectedState(selectorFn(store.getState()));
    });

    return () => unsubscribe();
  }, [store, selectorFn, selectedState]);

  return selectedState;
}

export const useMyDispatch = () => {
  const store = useStore();
  return store.dispatch;
};
