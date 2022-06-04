import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './common-btn.scss';


const CommonBtn = forwardRef((properties, ref) => {
    const { to, className ='', isSingle, ...props } = properties;
    const ElBtn = forwardRef((properties, ref) => <button ref={ref} className={`button ${className}`} {...props}></button>) 
    const Component = to ? Link : ElBtn;

    return (
        <Component ref={ref} to={to} {...props} className={`button ${className}`}/>
    )
})

export default CommonBtn