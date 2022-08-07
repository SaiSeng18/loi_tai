import Image from 'next/image'
import Link from 'next/link'
import React, { useState} from 'react'
import { images } from '../src/img'
import { urlFor, client } from '../lib/client'
import { motion } from 'framer-motion'

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
		delayChildren: 0.3,
		staggerChildren: 0.2
		}
	}
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1
	}
};

const ProductCard = ({ products }) => {
	// const reduced = products.reduce((filtered, product) => {
	// 	if(product.productStock == true){
	// 		filtered.push(product);
	// 	}

	// 	return filtered;
	// }, [])

	return (
		<motion.div className="card-container"
        variants={container}
        initial="hidden"
        animate="visible"
        >
			{products.map((product) => (
				<motion.div 
				variants={item}
				key={product._id}
				className="card"
				>
				<Link href={'/shop/' + product._id} key={product._id} passHref>
					<div className="shop-card">
						<div className="img-container"><img src={urlFor(product.productImage[0])}/></div>
						<p className="description">{product.productName}</p>
					</div>
				</Link>
				</motion.div>
				
			))}
        </motion.div>
	)
}

export default ProductCard;