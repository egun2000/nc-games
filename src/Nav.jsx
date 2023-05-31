import { Link } from 'react-router-dom'

function Nav () {
    return (
        <nav>
           <button className="navbutton"
        type="button"> <Link to='/'>Home</Link></button>
            <button className="navbutton"
        type="button"><Link to='/reviews'>Reviews</Link></button>
         <button className="navbutton"
        type="button"><Link to='/categories'>Categories</Link></button>  
        </nav>
    )
   
}

export default Nav


   
