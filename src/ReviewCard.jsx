import {  useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getReviews } from '../utils';
function ReviewCard () {
    const id = useParams()
  
    const [oneList, setOneList] = useState([])
    useEffect(() => {
        getReviews(id.review_id).then((data) => {
          setOneList(data)
        })
      }, [id.review_id])
      const setData = {...oneList}
    
    return(
        <main>  
            
        <h1 className='rvwtitle'>Review: {setData.title}</h1>
        <img src={setData.review_img_url} alt={setData.review_id} className='rcardimg' />
        <h3>Username: {setData.owner}</h3>
        <p className='bodytxt'>{setData.review_body}</p>
        <div className='infosec'>
              <h4>Designer: {setData.designer}</h4>
              <h4>Category: {setData.category}</h4>
              <h4>Votes: {setData.votes}</h4>
             
              </div>
        </main>
    )
}

export default ReviewCard