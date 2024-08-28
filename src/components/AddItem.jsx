import { useState } from "react"
import './AddItem.css'

/**
 * 
 * @component
 * @param {Object} props - component to add a todo
 * @param {function} props.onPush - function to add a todo
 * @returns {JSX.Element}
 */

export const AddItem = ({onPush}) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        // we steal the validation
        if(value.trim()) {
            onPush(value)
            setValue('')
        }
    }

    return (
        <>
            <form>
                <div className="block">
                    <input placeholder="Input action" type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                    <button onClick={handleSubmit}>Add</button>
                </div>
            </form>
        </>
    )
}