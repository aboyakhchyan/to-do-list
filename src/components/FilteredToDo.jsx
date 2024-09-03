import { useContext } from 'react'
import './FilteredToDo.css'
import { DataContext } from '../data'


export const FilteredToDo = () => {

    const {filteredChange, onFilteredChange} = useContext(DataContext)

    const list = ['All', 'Completed', 'Active']

    return (
        <div className='filt-btn'>
            {
                list.map((criteria, index) => <button 
                    key={index}
                    className={(filteredChange == criteria ? 'button-active ' : '') + ('index-' + index)}
                    onClick={() => onFilteredChange(criteria)}
                >
                    {criteria}
                </button>)
            }
        </div>
    )
}