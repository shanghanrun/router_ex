import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const About = () => {
	const navigate = useNavigate(); // navigate함수를 리턴해 준다.
	function goHome(){
		navigate('/')
	}
  return (
	<div>
	  <h1>About Page</h1>
	  <Link to="/">Home으로</Link>
	  <button onClick={goHome}>Home</button>
	</div>
  )
}

export default About
