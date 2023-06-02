import {  useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getSingleReview } from '../utils';
function ReviewCard () {
    // const id = useParams()
    const {review_id} = useParams()
    
    const [singleReview, setSingleReview] = useState({})
    useEffect(() => {
        getSingleReview(review_id).then((data) => {
          setSingleReview(data)
        })
      }, [review_id])
      const setData = {...singleReview}
    
    return(
        <main>  
            
        <h1 className='reviewtitle'>Review: {setData.title}</h1>
        <img src={setData.review_img_url} alt={setData.review_id} className='reviewcardimg' />
        <h3>Username: {setData.owner}</h3>
        <p className='bodytxt'>{setData.review_body}</p>
        <div className='reviewinfo'>
              <h4>Designer: {setData.designer}</h4>
              <h4>Category: {setData.category}</h4>
              <h4>Votes: {setData.votes}</h4>
             
              </div>
        </main>
    )
}

export default ReviewCard