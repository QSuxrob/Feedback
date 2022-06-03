import light from '../../assets/images/light.svg';
import dropDown from '../../assets/images/drop-down.svg';
import dropUp from '../../assets/images/drop-up-light.svg';
import CommonBtn from '../common-btn/common-btn';
import './header.scss';
import { useData } from '../../contexts/data';
import { useState } from 'react';
import PopUp from '../popup/popup';

export const sortOptions = [
    {
      text: "Most upvotes",
      value: "1"
    },
    {
      text: "Least Upvotes",
      value: "2",
    },
    {
      text: "Most Comments",
      value: "3",
    },
    {
      text: "Least Comments",
      value: "4"
    }
  ]

function Header({ count }) {
    const { data, setData } = useData()
    const [ isOpen, setOpen ] = useState(false)
    const [ sortBy, setSort ] = useState('2')

    function openPopup() {
        setOpen(!isOpen);
    }

    const handleOptionChange = (evt) => {
        const sortValue = evt.target.value;
    
        setOpen(false);
        setSort(sortValue);
    
        setData((data) => {
          return {
            ...data,
            productRequests: data.productRequests.sort((a, b) => {
              switch (sortValue) {
                case "1":
                  return b.upvotes - a.upvotes;
                case "2":
                  return a.upvotes - b.upvotes;  
                case "3": 
                  return (b.comments?.length || 0) - (a.comments?.length || 0)  
                case "4": 
                  return (a.comments?.length || 0) - (b.comments?.length || 0)  
                default:
                  return 0
              }
            })
          }
        });
      }

    return (
        <header className='header'>
            <img className='header__light-icon' src={light} width='23' height='24' />
            <p className='header__suggestions'>
                {count}: Suggestions
            </p>
            <button className='header__sort' onClick={openPopup}>
                Sort by :
                <span className='header__sort-type'>{sortOptions.map(option => { 
                    if(option.value === sortBy) {
                        return option.text
                    } })
                    }</span>
                <img className='header__sort-icon' src={isOpen === true ? dropUp : dropDown} />
            </button>
            <CommonBtn to='/add' className='header__btn'>+ Add Feedback</CommonBtn>
            <PopUp className={isOpen === true ? 'popup--opened' : 'popup--closed'} options={sortOptions} defaultValue={sortBy} name='sort' onChange={handleOptionChange} />
        </header>
    )
}

export default Header