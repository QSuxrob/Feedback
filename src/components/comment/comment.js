import './comment.scss'
import anne from '../../assets/images/anne.png'
import elijah from '../../assets/images/elijah.png'
import ryan from '../../assets/images/ryan.png'
import james from '../../assets/images/james.png'
import { useEffect, useState } from 'react'

function Comment({ properties }) {
    const name = properties.user.name;
    const username = properties.user.username;
    const content = properties.content;

    const [ userPic, setPic ] = useState(anne);
    useEffect(() => {
        if( name === "Ryan Welles" ) {
            setPic(ryan)
        } else if ( name === "Elijah Moss" ) {
            setPic(elijah)
        } else if ( name === "James Skinner" ) {
            setPic(james)
        } else {
            setPic(anne)
        }
    }, [])

    return (
        <li className='comment'>
            <img className='comment__user-pic' src={userPic} />
            <div className='comment__content'>
                <div className='comment__header'>
                    <div className='comment__user'>
                        <h3 className='comment__name'>{name}</h3>
                        <p className='comment__username'>{username}</p>
                    </div>
                    <button className='comment__reply'>Reply</button>
                </div>
                <p className='comment__text'>{content}</p>
            </div>
        </li>
    )
}

export default Comment