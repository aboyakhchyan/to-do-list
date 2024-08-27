import { useState } from "react";
import "./App.css";
import { AddItem } from "./components/AddItem";
import { List } from "./components/LIst";

function App() {

  const [todos, setTodos] = useState([])

  const [filteredChange, setFilteredChange] = useState('All')
  
  const pushItem = name => {
    setTodos([...todos, {name, id: Date.now(), completed: false}])
  }

  const handleRemove = id => {
    let temp = [...todos]

    temp = temp.filter(todo => todo.id !== id || !todo.completed)

    setTodos(temp)
  }

  const handleCmpleted = id => {
    setTodos(todos.map(todo=> todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  return (
    <>
      <h1 className="title">ToDo List</h1>
      <AddItem todos={todos} onPush={pushItem}/>
      <List todos={todos} onRemove={handleRemove} 
      onCompleted={handleCmpleted} filteredChange={filteredChange} onSet={setFilteredChange}/>
    </>
  )
}

export default App
