import { ToDoItem } from "./ToDoItem"
import './List.css'


export const List = ({users, onRemove, onCompleted}) => {

    const changeComplete = () => {
        return users.reduce((aggr, user) => aggr + user.completed, 0)
    }

    return (
        <div className="list">
            {
                users.map(item => <ToDoItem key={item.id} {...item} onRemove={onRemove} onCompleted={onCompleted}/>)
            }
            <p>{users.length ? `${changeComplete()}/${users.length} completed` : null}</p>
        </div>
    )
}