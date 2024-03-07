import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()
	const goProductPage =()=>{
		navigate('/products?q=pants')
		
	}
  return (
	<div>
	  <h1>Home Page</h1>
	  <Link to="/about">About page로</Link>
	  <button onClick={goProductPage}>go to product page</button>
	</div>
  )
}

export default Home
