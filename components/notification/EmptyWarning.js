import React from 'react'
import Image from 'next/image'
import { images } from '../../src/img'

const EmptyWarning = ({setEmpty, empty}) => {
  return (
	<div className='empty-item'>
		<div className="container">
			<div className="img-container">
				<Image src={images.alert} />
			</div>
			<h3>Your Cart is Empty!</h3>
			<p>Please add some product in cart to proceed.</p>
			<button onClick={() => setEmpty(!empty)}>Ok</button>
		</div>
	</div>
  )
}

export default EmptyWarning