import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; todoClicked: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.todoClicked}>
      {props.text}
    </li>
  );
};

export default TodoItem;
