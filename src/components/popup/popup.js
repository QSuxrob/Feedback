import { useState } from 'react';
import tick from '../../assets/images/tick.svg';
import './popup.scss';

function PopUp({ className = "", options, name, onChange, defaultValue }) {
    return (
        <ul className={`popup ${className}`} onChange={onChange}>
            {options.map(option => (
                <li key={option.value} className='popup__item' >
                    <label className='popup__option-label'>
                        <input defaultValue={option.value} defaultChecked={defaultValue === option.value} className="select-popup__option-radio visually-hidden" name={name} type="radio" />
                        {option.text}
                        <span  className="select-popup__option-tick"></span>
                    </label>
                </li>
            ))}
        </ul>
    )
}

export default PopUp