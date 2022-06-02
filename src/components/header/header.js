import light from '../../assets/images/light.svg';
import dropDown from '../../assets/images/drop-down.svg';
import CommonBtn from '../common-btn/common-btn';
import './header.scss';
import { useData } from '../../contexts/data';

function Header({ count }) {

    const { data } = useData()
    const sortBy = 'Most Upvotes'

    return (
        <header className='header'>
            <img className='header__light-icon' src={light} width='23' height='24' />
            <p className='header__suggestions'>
                {count} :Suggestions
            </p>
            <p className='header__sort'>
                Sort by :
                <span className='header__sort-type'>{sortBy}</span>
                <img className='header__sort-icon' src={dropDown} />
            </p>
            <CommonBtn to='/add' className='header__btn'>+ Add Feedback</CommonBtn>
        </header>   
    )
}

export default Header