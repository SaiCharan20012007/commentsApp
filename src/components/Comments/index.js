import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onTextareaChange = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
    }))

    this.setState({name: ''})

    this.setState({comment: ''})
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: filteredList})
  }

  isLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    const count = commentsList.length

    return (
      <div className="bg-container">
        <div className="top-section">
          <div className="top-section-left">
            <h1 className="top-section-title">Comments</h1>
            <p className="top-section-description">
              Say something about 4.0 Technologies
            </p>
            <form onSubmit={this.addComment}>
              <input
                type="text"
                placeholder="Your Name"
                className="commenter-name"
                onChange={this.onNameChange}
                value={name}
              />
              <textarea
                className="commenter-comment"
                placeholder="Your Comment"
                onChange={this.onTextareaChange}
                value={comment}
              />
              <button type="submit" className="add-comment-button">
                Add Comment
              </button>
            </form>
          </div>
          <div className="top-section-right">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
        </div>
        <div className="bottom-section">
          <div className="comments-counter-section">
            <div className="comments-counter">{count}</div>
            <p className="comments-counter-des">Comments</p>
          </div>
          <ul className="unorderdlist-comments">
            {commentsList.map(each => (
              <CommentItem
                key={each.id}
                name={each.name}
                comment={each.comment}
                id={each.id}
                onDelete={this.deleteComment}
                initialContainerBackgroundClassNames={
                  initialContainerBackgroundClassNames
                }
                isLiked={each.isLiked}
                isLike={this.isLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
