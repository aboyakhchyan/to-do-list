import { ToDoItem } from "./ToDoItem"
import './List.css'
import { FilteredToDo } from "./FilteredToDo"


export const List = ({todos, onRemove, onCompleted, filteredChange, onSet}) => {

    const changeComplete = () => {
        return todos.reduce((aggr, todo) => aggr + todo.completed, 0)
    }

    let newTodos = todos

    if(filteredChange == 'Completed') {
        newTodos = todos.filter(todo => todo.completed)
    }else if(filteredChange == 'Active') {
        newTodos = todos.filter(todo => !todo.completed)
    }

    return (
        <div className="list">
            {
                newTodos.map(todo => <ToDoItem key={todo.id} {...todo} onRemove={onRemove} onCompleted={onCompleted}/>)
            }
            {todos.length ? <FilteredToDo filteredChange={filteredChange} onSet={onSet}/> : null}
            <p>{todos.length ? `${changeComplete()}/${todos.length} completed` : null}</p>
        </div>
    )
}