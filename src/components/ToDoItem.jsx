import { useContext } from 'react'
import './ToDoItem.css'
import { DataContext } from '../data'



export const ToDoItem = ({name, id, completed}) => {

    const {onRemove, onCompleted} = useContext(DataContext)

    return (
        <div className={completed ? 'completed' : 'todo-item'}>
            <p>{name}</p>
            <button onClick={() => onCompleted(id)} className='btn-cmp'>{completed ? 'Cancel' : 'Complete'}</button>
            <button className='btn-list' onClick={() => onRemove(id)}>Delete</button>
        </div>
    )
}