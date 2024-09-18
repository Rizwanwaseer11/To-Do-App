import { useContext } from "react";
import { dataContext } from "./store/data-store";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const { todoData } = useContext(dataContext);

  // console.log({ dataFromContext });

  return (
    <div classNameName="container">
      <div classNameName="row kg-row">
        {todoData.map((items) => (
          <TodoItem
            key={Math.random()}
            todoName={items.todoName}
            todoDate={items.todoDate}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
};
export default TodoItems;
