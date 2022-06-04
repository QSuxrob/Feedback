import { useData } from '../../contexts/data';
import Comment from '../comment/comment';
import './comments.scss';

function Comments({ comments }) {

    // Pro version
    const commentsCount = comments?.length || 0

    return (
        <div className='comments'>
            <div className='comments__header'>
                <h2 className='comments__header-title'> {commentsCount} Comments</h2>
            </div>
            {comments.map(comment => {
                return (
                    <Comment key={comment.id} properties={comment} />
                )
            })}
        </div>
    )
}

export default Comments