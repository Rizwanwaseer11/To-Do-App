import { createContext } from "react";

export const dataContext = createContext({
  todoData: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
