import Image from 'next/image'
import React from 'react'
import { images } from '../../src/img'

const Warning = ({warning, setWarning}) => {
  return (
	<div className='warning'>
		<div className="container">
			<div className="img-container">
				<Image src={images.alert} />
			</div>
			<h3>Alert!</h3>
			<p>You have not selected a color or size.</p>
			<button onClick={() => setWarning(!warning)}>Ok</button>
		</div>
	</div>
  )
}

export default Warning