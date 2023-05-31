import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Reviews from './Reviews'
import Categories from './Categories'

function App() {
  

  return (
    <>
    <Nav/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/reviews" element={<Reviews/>}></Route>
      <Route path="/categories" element={<Categories/>}></Route>
    </Routes>  
    </>
    
  )
}

export default App
