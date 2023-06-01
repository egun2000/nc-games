import axios from 'axios'

export const getReviews = (id) => {
    if(id){
        return axios
        .get(`https://gameproject-nd4p.onrender.com/api/reviews/${id}`)
        .then((response) =>{ 
          return response.data.review[0]}); 
    }else
      return axios
      .get(`https://gameproject-nd4p.onrender.com/api/reviews/`)
      .then((response) =>{ 
        return response.data.reviews});
  };

