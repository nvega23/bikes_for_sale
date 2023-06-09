import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { clearReviewErrors, deleteReview, fetchReview, updateReview } from '../../store/review'
import './ReviewUpdate.css'

function ReviewUpdate() {
    const { reviewId, userId } = useParams()
    const review = useSelector(state => state.review)
    const [title, setTitle] = useState(review.title)
    const [body, setBody] = useState(review.body)
    const [rating, setRating] = useState(review.rating)
    const errors = useSelector(state => state.errors.review);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (e) => {
      e.preventDefault()
      dispatch(updateReview(title, body, rating, reviewId))
      if(!errors){
        navigate(`/profile/${userId}`)
      }
    }

    useEffect( () => {
      dispatch(fetchReview(reviewId))
    }, [])

    useEffect(() => {
      return () => {
        dispatch(clearReviewErrors());
      };
    }, [dispatch]);

  return (
      <div className='reviewUpdate'>
      <form className="reviewForm" onSubmit={handleClick}>
        <div className='reviewInputs'>
            <div className="errors">{errors?.title}</div>
            <input
              className='reviewStyleInputs'
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={review.title}
              />

            <label> New Title </label>

          <div className="errors">{errors?.body}</div>
          <input
            className='reviewStyleInputs'
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={review.body}
            id='review-body'
            />
          <label> New Body </label>


          <div className="errors">{errors?.rating}</div>
          <input
            type="text"
            className='reviewStyleInputs'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder={review.rating}
            required
            />

          <label> New Rating </label>


          <input type='submit'
            className='updateReviewButton'
            value="Update!"
            disabled={!body || !title || !rating}
            />

        </div>
      </form>
      </div>
  )
}

export default ReviewUpdate
