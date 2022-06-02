import './filter-box.scss';

function FilterBox({ children }) {
    return <fieldset className='filter-box'>{children}</fieldset>
}

export default FilterBox