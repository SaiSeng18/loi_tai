import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { images } from '../src/img';
import Burgermenu from '../components/Burgermenu.js'
import Cart from './Cart';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
	const [toggle, setToggle] = useState(true);
	const [openCart, setOpenCart] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle)
	}

	const handleCart = () => {
		setOpenCart(!openCart)
	}

	return (
		<nav className="navbar">
			<Link href="/" passHref><Image src={images.loitai} alt="image" height={40} width={180} ></Image></Link>
			<div className="menu">
				<li>
					<Link href="/"><a>HOME</a></Link>
					<ul>
						<li><Link href="/"><a>LT | SS01</a></Link></li>
						{/* <li><Link href="/home/vss1"><a>LOI TAI X VLONE - VSS1</a></Link></li>
						<li><Link href="/home/mwm"><a>MEET WITH MAYA</a></Link></li> */}
					</ul>
				</li>

				<li>
					<Link href="/shop"><a>SHOP</a></Link>
					{/* <ul>
						<li><Link href="/shop/"><a>ALL PRODUCT</a></Link></li>
						<li><Link href="/shop/"><a>IN STOCK</a></Link></li>
						<li><Link href="/shop/"><a>LATEST</a></Link></li>
					</ul> */}
				</li>

				<li>
					<a>FOCUS</a>
					<ul>
						<li><Link href="/focus/archive"><a>ARCHIVE</a></Link></li>
						<li><Link href="/focus/lookbook"><a>LOOKBOOK</a></Link></li>
					</ul>
				</li>

				<li>
					<a>EXTRA</a>
					<ul>
						<li><Link href="/extra/subscribe"><a>SUBSCRIBE</a></Link></li>
						<li><Link href="/extra/stockist"><a>STOCKIST</a></Link></li>
						<li><Link href="/extra/terms"><a>TERMS</a></Link></li>
					</ul>
				</li>
			</div>

			<div className="shop-cart">
				<div className="cart-img" onClick={handleCart}><Image src={images.cart} alt="cart"></Image></div>
				{toggle ? <div className="menu-icon" onClick={handleToggle}><Image src={images.menu} alt="menu"></Image></div> : <Burgermenu handleToggle={handleToggle} />}
			</div>
			<AnimatePresence>
				{openCart && <Cart handleCart={handleCart}/>}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar