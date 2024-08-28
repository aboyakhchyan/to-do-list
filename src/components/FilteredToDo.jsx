import './FilteredToDo.css'

/**
 * 
 * @component
 * @param {Object} props 
 * @param {string} props.filteredChange - state to store list values
 * @param {function} props.onSet - callback function to change state values
 * @returns {JSX.Element}
 */

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