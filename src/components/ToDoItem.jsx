import './ToDoItem.css'

export const ToDoItem = ({name, id, completed, onRemove, onCompleted}) => {
    return (
        <div className={completed ? 'completed' : 'todo-item'}>
            <p>{name}</p>
            <button onClick={() => onCompleted(id)} className='btn-cmp'>✓</button>
            <button className='btn-list' onClick={() => onRemove(id)}>Delete</button>
        </div>
    )
}