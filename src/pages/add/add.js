import { Link } from 'react-router-dom'
import Container from '../../components/container/container'
import dropLeft from '../../assets/images/drop-left.svg'
import addIcon from '../../assets/images/add-icon.svg'
import './add.scss'
import CommonBtn from '../../components/common-btn/common-btn'

function Add() {
    return (
        <div className='add'>
            <Link className='add__link' to='/'>
                <img className='add__link-img' src={dropLeft} />
                Go Back
            </Link>
            <Container className='add__container'>
                <span className='add__icon-wrapper'>
                    <img className='add__icon' src={addIcon} />
                </span>
                <h1 className='add__title'>Create New Feedback</h1>
                <form className='add__form'>
                    <label className='add__form-title'>
                        <span className='add__form-title--name'>Feedback Title</span>
                        Add a short, descriptive headline
                        <input className='add__form-title--input' />
                    </label>
                    <label className='add__form-category'>
                        <span className='add__form-category--name'>Category</span>
                        Choose a category for your feedback
                        <input className='add__form-category--input' />
                    </label>
                    <label className='add__form-detail'>
                        <span className='add__form-detail--name'>Feedback Detail </span>
                        Include any specific comments on what should be improved, added, etc.
                        <textarea className='add_form-detail--textarea'></textarea>
                    </label>
                    <div className='add__form-control'>
                        <CommonBtn className="add__form-control--cancel">Cancel</CommonBtn>
                        <CommonBtn className="add__form-control--add">Add Feedback</CommonBtn>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default Add