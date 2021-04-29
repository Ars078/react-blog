import './BlogCard.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { DeleteForever } from '@material-ui/icons';

export const BlogCard = ({
    title,
    description,
    liked,
    likePost,
    deletePost
}
) =>{

    const heartFill = liked ? 'crimson':'black'

        return (
            <div className="post">
                <div className='postContent'>
                <h2>{title}</h2>
                <p>
                {description}
                </p>
                <div>
                    <button onClick={likePost}>
                    <FavoriteIcon style={{fill:heartFill}}/>
                    </button>
                </div>
                </div>
                <button className='deleteBtn' onClick={deletePost}>
                    <DeleteForever/>
                </button>
              </div>
        )
}