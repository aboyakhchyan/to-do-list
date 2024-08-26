import { useState } from "react";
import "./App.css";
import { AddItem } from "./components/AddItem";
import { List } from "./components/LIst";

function App() {

  const [users, setUsers] = useState([])
  
  const pushItem = obj => {
    setUsers([...users, {...obj, id: (new Date).getTime(), completed: false}])
    console.log(users)
  }

  const handleRemove = id => {
    let temp = [...users]

    temp = temp.filter(item => item.id !== id || !item.completed)

    setUsers(temp)
  }

  const handleCmpleted = id => {
    setUsers(users.map(user=> user.id === id ? {...user, completed: !user.completed} : user))
  }

  return (
    <>
      <h1 className="title">ToDo List</h1>
      <AddItem users={users} onPush={pushItem}/>
      <List users={users} onRemove={handleRemove} onCompleted={handleCmpleted}/>
    </>
  )
}

export default App
