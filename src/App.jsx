import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { dataContext } from "./components/store/data-store";

import "./App.css";
import { Button } from "bootstrap";
import { useState } from "react";

function App() {
  const initialState = [
    //   { todoName: "goto School", todoDate: "22/8/2024" },
    //   { todoName: "goto masjid", todoDate: "22/8/2024" },
    //   { todoName: "goto tution", todoDate: "22/8/2024" },
  ];
  const [todoData, setData] = useState([]);

  //Spread operator to maintain immutability  when updating value

  // const addNewItem = (itemName, itemDate) => {
  //   // console.log(`item: ${itemName} date: ${itemDate}`);
  //   let newtodo = [...data, { todoName: itemName, todoDate: itemDate }];
  //   setData(newtodo);
  // };

  const addNewItem = (itemName, itemDate) => {
    // console.log(`item: ${itemName} date: ${itemDate}`);
    setData((currentValue) => [
      ...currentValue,
      { todoName: itemName, todoDate: itemDate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    let addNewItem = todoData.filter((item) => item.todoName !== todoItemName);
    setData(addNewItem);
  };

  return (
    <dataContext.Provider
      value={{
        todoData,
        addNewItem,
        deleteItem,
      }}
    >
      <center classNameName="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItem></TodoItem>
      </center>
    </dataContext.Provider>
  );
}

export default App;
