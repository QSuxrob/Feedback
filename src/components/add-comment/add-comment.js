import { useState } from 'react';
import CommonBtn from '../common-btn/common-btn';
import './add-comment.scss';

function AddComment() {

    const [ length, setLength ] = useState("250");


    return (
        <div className='add-comment'>
            <h2 className='add-comment__title'>Add Comment</h2>
            <form className='add-comment__form'>
                <input maxLength={250} className='add-comment__input' type={'text'} placeholder='Type your comment here' />
                <div className='add-comment__control'>
                    <p className='add-comment__input-characters'>{`${length} characters left`}</p>
                    <CommonBtn className='add-comment__btn'>Post Comment</CommonBtn>
                </div>
            </form>
        </div>
    )
}

export default AddComment