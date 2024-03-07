import React from 'react'
import {useParams} from 'react-router-dom'

const ProductDetail = () => {
	const {id} = useParams()   // params대신에 {id}
	return (
		<div>
			<h1>Show Product Detail {id}</h1>
		</div>
	)
}

export default ProductDetail
