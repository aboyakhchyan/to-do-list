import './FilteredToDo.css'

export const FilteredToDo = ({filteredChange, onSet}) => {

    const list = ['All', 'Completed', 'Active']

    return (
        <div className='filt-btn'>
            {
                list.map((criteria, index) => <button 
                    key={index}
                    className={(filteredChange == criteria ? 'button-active ' : '') + ('index-' + index)}
                    onClick={() => onSet(criteria)}

                >
                    {criteria}
                </button>)
            }
        </div>
    )
}