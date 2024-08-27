import { useState } from "react"
import './AddItem.css'

export const AddItem = ({onPush}) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

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