import { createContext, useContext } from "react";

export const DataContext = createContext();

// Custom hook to access DataContext
export function useData() {
  return useContext(DataContext);
}
