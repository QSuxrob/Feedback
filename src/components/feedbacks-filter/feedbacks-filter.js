import { useContext } from 'react';
import { FilterContext } from '../../pages/home/home';
import FilterBox from '../filter-box/filter-box';
import FilterRadio from '../filter-radio/filter-radio';
import './feedbacks-filter.scss';

export const filterCategories = [
    {
        type: 'All',
        value: 'all',
    },
    {
        type: 'UI',
        value: 'ui',
    },
    {
        type: 'UX',
        value: 'ux',
    },
    {
        type: 'Enhancement',
        value: 'enhancement',
    },
    {
        type: 'Bug',
        value: 'bug',
    },
    {
        type: 'Feature',
        value: 'feature',
    },
]

function FeedbacksFilter() {
    const { isFilter, setFilter } = useContext(FilterContext)

    function onFilter(evt) {
        const check = evt.target.value
        
        setFilter(check);
    }

    return (
        <form>
            <FilterBox>
                <div className='filter-box__innner'>
                    <legend className='visually-hidden'>Filter</legend>
                    {filterCategories.map(category => <FilterRadio key={category.value} value={category.value} className='filter-box__btn' name='filter' children={category.type} onClick={onFilter} />)}
                </div>
            </FilterBox>
        </form>
    )
}

export default FeedbacksFilter