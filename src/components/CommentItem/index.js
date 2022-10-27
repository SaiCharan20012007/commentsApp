// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    name,
    comment,
    onDelete,
    id,
    initialContainerBackgroundClassNames,
    isLike,
    isLiked,
  } = props

  const random =
    initialContainerBackgroundClassNames[
      Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
    ]
  const deleteComment = () => {
    onDelete(id)
  }

  const likeTriggered = () => {
    isLike(id)
  }
  const likeurl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const first = name.charAt(0)

  const date = formatDistanceToNow(new Date())
  return (
    <div>
      <li className="list-container">
        <div className="list-top-section">
          <div className={random}>{first}</div>
          <div className="name-and-time">
            {name} <span className="time">{date}</span>
          </div>
        </div>
        <p className="comment-description">{comment}</p>
        <div className="list-icons">
          <button type="button" className="likeBtn" onClick={likeTriggered}>
            <div className="like-container">
              <img src={likeurl} alt="like" />
              <p className="like">Like</p>
            </div>
          </button>
          <button
            type="button"
            className="deleteBtn"
            onClick={deleteComment}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default CommentItem
