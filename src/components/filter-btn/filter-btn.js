import './filter-btn.scss';

function FilterBtn({ children, className }) {
    return <span className={`filter-btn ${className}`}>{children}</span>
}

export default FilterBtn