import { useState } from "react"
import "./App.css"
import ToDoList from "./components/ToDoList"
import { DataContext } from "./data"

export default function App () {

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
        <DataContext.Provider value={{todos, filteredChange, onFilteredChange: setFilteredChange,
           onPushItem: pushItem, onRemove: handleRemove, onCompleted: handleCmpleted}}>
          <ToDoList />
        </DataContext.Provider>
      </>
    )
}