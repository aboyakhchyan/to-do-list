import { ToDoItem } from "./ToDoItem"
import './List.css'
import { FilteredToDo } from "./FilteredToDo"

/**
 * 
 * @component
 * @param {Object} props
 * @param {Array} props.todos - array containing all todos
 * @param {function} props.onRemove - callback function that remove the todo
 * @param {function} props.onCompleted - callback function that checks the result happened
 * @param {string} props.filteredChange - callback state to store list values
 * @param {function} props.onSet - callback function to change state values
 */


export const List = ({todos, onRemove, onCompleted, filteredChange, onSet}) => {

    const changeComplete = () => {
        return todos.reduce((aggr, todo) => aggr + todo.completed, 0)
    }

    let newTodos = [...todos]

    if(filteredChange == 'Completed') {
        newTodos = newTodos.filter(todo => todo.completed)
    }else if(filteredChange == 'Active') {
        newTodos = newTodos.filter(todo => !todo.completed)
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