import { useContext, useState } from "react"
import './AddItem.css'
import { DataContext } from "../data"


export const AddItem = () => {

    const {onPushItem} = useContext(DataContext)

    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        // we steal the validation
        if(value.trim()) {
            onPushItem(value)
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