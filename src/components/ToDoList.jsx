import { AddItem } from "./AddItem";
import { List } from "./LIst";

export default function ToDoList() {

  return (
    <>
      <h1 className="title">ToDo List</h1>
      <AddItem />
      <List />
    </>
  )
}


