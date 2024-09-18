import { dataContext } from "./store/data-store";
import { useContext } from "react";
import { /*useState,*/ useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo() {
  const dataObj = useContext(dataContext);
  const addNewItem = dataObj.addNewItem;

  // const [todo, setTodo] = useState("");
  // const [date, setDate] = useState("");
  const todoElment = useRef();
  const dateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodo(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDate(event.target.value);
  // };

  const handleAddButton = (event) => {
    event.preventDefault(); //using for form to stop seding data to server//
    const todo = todoElment.current.value;
    const date = dateElement.current.value;
    todoElment.current.value = "";
    dateElement.current.value = "";
    addNewItem(todo, date);
    // setTodo("");
    // setDate("");
  };
  return (
    <div classNameName="container text-center">
      <form
        classNameName="row kg-row"
        onSubmit={(todo, date) => handleAddButton(todo, date)} // using onSubmit to form tag except onClick button on button element//
      >
        <div classNameName="col-4">
          <input
            type="text"
            placeholder="enter todo here"
            ref={todoElment}
            // onChange={handleNameChange}
            // value={todo}
          />
        </div>
        <div classNameName="col-4">
          <input
            type="date"
            ref={dateElement}
            //  onChange={handleDateChange}
            // value={date}
          />
        </div>
        <div classNameName="col-2">
          <button type="submit" classNameName="btn btn-success kg-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
