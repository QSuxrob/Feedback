import { Link } from 'react-router-dom';
import dropUp from '../../assets/images/drop-up.svg';
import dropUpLight from '../../assets/images/drop-up-light.svg';
import chat from '../../assets/images/chat.svg'
import FilterBtn from '../filter-btn/filter-btn';
import './product-card.scss';
import { useState } from 'react';
import { useData } from '../../contexts/data';

function ProductCard({ properties }) {
    const { data, setData } = useData()
    const changedIndex = data.productRequests.findIndex(product => properties.id === product.id)
    const { upvotes, title, description, category, comments } = properties;
    const commentsCount = comments ? comments.length : 0;
    const [isClicked, setClicked] = useState(false);


    function onClick() {
        const newProduct = {
            ...properties,
            isClicked: true
        }
        
        setClicked(!isClicked)
        setData({
            ...data,
            productRequests: [
                ...data.productRequests.slice(0, changedIndex),
                newProduct,
                ...data.productRequests.slice(changedIndex + 1)
            ]
        })
    }

    return (
        <li className='product-card'>
            <button className={`product-card__btn btn${isClicked === true ? "--click" : ""}`} onClick={onClick} >
                <img className='product-card__btn-icon' src={isClicked === false ? dropUp : dropUpLight} width='8' height='4' />
                <span className='product-card__btn-num'>{isClicked === true ? upvotes + 1: upvotes}</span>
            </button>
            <div className='product-card__body'>
                <Link to={`/feedback`} className='product-card__title'>{title}</Link>
                <p className='product-card__text'>{description}</p>
                <FilterBtn>{category}</FilterBtn>
            </div>
            <div className='product-card__comments'>
                <img className='product-card__comment-icon' src={chat} />
                <span className='product-card__comment-count'>{commentsCount}</span>
            </div>
        </li>
    )
}

export default ProductCard