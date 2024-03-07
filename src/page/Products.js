import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Products = () => {
	let [query, setQuery] = useSearchParams()
	console.log('name : ',query.get('name') )   // q로 쿼리를 한 값.
  return (
	<div>
	  <h1>Products Page</h1>
	</div>
  )
}

export default Products
