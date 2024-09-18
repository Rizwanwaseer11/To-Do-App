import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { dataContext } from "./store/data-store";

function todoitem({ todoName, todoDate }) {
  const { deleteItem } = useContext(dataContext);
  return (
    <>
      <div classNameName="col-4">{todoName}</div>

      <div classNameName="col-4">{todoDate}</div>
      <div classNameName="col-2">
        <button
          type="button"
          classNameName="btn btn-danger kg-button"
          onClick={() => deleteItem(todoName)}
        >
          <MdDelete />
        </button>
      </div>
    </>
  );
}

export default todoitem;
