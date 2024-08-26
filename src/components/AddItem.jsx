import { useState } from "react"
import './AddItem.css'

export const AddItem = ({onPush}) => {
    const [value, setValue] = useState({
        name: '',
    })

    const handleSubmit = e => {
        e.preventDefault()

        if(value.name.trim()) {
            onPush(value)
            setValue({name: ''})
        }
    }

    return (
        <>
            <form>
                <div className="block">
                    <input placeholder="Input action" type="text" value={value.name} onChange={(e) => setValue({...value, name: e.target.value})}/>
                    <button onClick={handleSubmit}>Add</button>
                </div>
            </form>
        </>
    )
}