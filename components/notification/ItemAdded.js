import React from 'react'
import Image from 'next/image'
import { images } from '../../src/img'

const ItemAdded = ({addItem, setAddItem}) => {
  return (
	<div className='added-item'>
		<div className="container">
			<div className="img-container">
				<Image src={images.success} />
			</div>
			<h3>Item Added</h3>
			<p>Your selected item has been added.</p>
			<button onClick={() => setAddItem(!addItem)}>Ok</button>
		</div>
	</div>
  )
}

export default ItemAdded