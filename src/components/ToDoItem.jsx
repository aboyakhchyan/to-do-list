import './ToDoItem.css'

/**
 * 
 * @component 
 * @param {Object} props
 * @param {string} props.name - name of todo
 * @param {number} props.id - identifier of todo
 * @param {boolean} props.completed - complete result
 * @param {function} props.onRemove - callback function that remove the todo
 * @param {function} props.onCompleted - callback function that checks the result happened
 * @returns {JSX.Element}
 */

export const ToDoItem = ({name, id, completed, onRemove, onCompleted}) => {
    return (
        <div className={completed ? 'completed' : 'todo-item'}>
            <p>{name}</p>
            <button onClick={() => onCompleted(id)} className='btn-cmp'>{completed ? 'Cancel' : 'Complete'}</button>
            <button className='btn-list' onClick={() => onRemove(id)}>Delete</button>
        </div>
    )
}