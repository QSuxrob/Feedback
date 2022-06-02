import FilterBtn from '../filter-btn/filter-btn';
import './filter-radio.scss';

function FilterRadio({ className="", children, ...props }) {
    return (
        <label className={`filter-radio ${className}`}>
            <input className='filter-radio__input visually-hidden' type={'radio'} {...props} />
            <FilterBtn className='filter-radio__text'>{children}</FilterBtn>
        </label>
    )
}

export default FilterRadio