import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Image from 'next/image'
import { images } from '../src/img';
import Cart from './Cart';

const Layout = ({children}) => {

	return (
		<div className="layout">
			<Navbar/>
			<div className="divider"></div>
				{children}
			<div className="footer-logo" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
				<Image src={images.logomark} alt="image" layout='fill' objectFit="cover" className="logomark"/>
			</div>
			<Footer/>
			{/* <Cart /> */}
		</div>
	)
}

export default Layout