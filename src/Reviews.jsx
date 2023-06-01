import { useState, useEffect } from 'react'
import { getReviews } from '../utils'
import { Link } from 'react-router-dom'

function Reviews () {
    const [reviewList, setReviewList] = useState([])
    
    
    useEffect(() => {
        getReviews().then((data) => {
          setReviewList(data)
        })
      })
    
    return (
        <main>
            <h1>Welcome to Reviews</h1>
            <ul className='navList'>
        {reviewList.map((item) => {   
            let num = item.review_id
            const link = `/reviews/${num}`
          return (
           <li key={item.review_id} className='alt'>
              <Link to={link}><h2>Title: {item.title}</h2></Link>
              <Link to={link}> <img src={item.review_img_url} alt={item.review_id} /></Link>
              <p>Username: {item.owner}</p>
              <p>Comments: {item.comment_count}</p>
              <p>Votes: {item.votes}</p>
              <p>Category: {item.category}</p>
              <p>Created on: {item.created_at.slice(0,10)}</p>
            </li>
          )
        })}
      </ul>
        </main>
    )
}

export default Reviews