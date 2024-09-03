import { useContext, useEffect, useState } from "react"
import { ToDoItem } from "./ToDoItem"
import './List.css'
import { FilteredToDo } from "./FilteredToDo"
import { DataContext } from "../data"



export const List = () => {

    const {todos, filteredChange} = useContext(DataContext)

    const [change, setChange] = useState(0)

    useEffect(() => {
         setChange(todos.reduce((aggr, todo) => aggr + todo.completed, 0))
    }, [todos])


    let newTodos = [...todos]
    

    if(filteredChange == 'Completed') {
            newTodos = newTodos.filter(todo => todo.completed)
    }else if(filteredChange == 'Active') {
            newTodos = newTodos.filter(todo => !todo.completed)
    }
    
    

    return (
        <>
            {
                newTodos.map(todo => <ToDoItem key={todo.id} {...todo} />)
            }
            {todos.length ? <FilteredToDo /> : null}
            <div className="list-text">
                {
                    todos.length ?  (
                        <>
                            <p>{change}/{todos.length} completed</p>
                            <p className="last-text">status:<strong>{filteredChange}</strong></p>
                        </> 
                    ) : null
                }
            </div>
        </>
    )
}