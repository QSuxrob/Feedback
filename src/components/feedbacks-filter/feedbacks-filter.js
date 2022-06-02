import { useData } from '../../contexts/data';
import FilterBox from '../filter-box/filter-box';
import FilterRadio from '../filter-radio/filter-radio';
import './feedbacks-filter.scss';

function FeedbacksFilter({filterCategories}) {

    const { data, setData } = useData();

    return (
        <form>
            <FilterBox>
                <div className='filter-box__innner'>
                    <legend className='visually-hidden'>Filter</legend>
                    {filterCategories.map(category => <FilterRadio key={category.value} value={category.value} className='filter-box__btn' name='filter' children={category.type} />)}
                </div>
            </FilterBox>
        </form>
    )
}

export default FeedbacksFilter