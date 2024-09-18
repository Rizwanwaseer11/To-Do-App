import { dataContext } from "./store/data-store";
import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  const dataObj = useContext(dataContext);
  const todoData = dataObj.todoData;

  return todoData.length === 0 ? (
    <p classNameName={styles.message}>Enjoy Your Day</p>
  ) : (
    ""
  );
};

export default WelcomeMessage;
