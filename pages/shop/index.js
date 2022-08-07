import Image from 'next/image'
import Link from 'next/link'
import React, { useState} from 'react'
import { images } from '../../src/img'
import { urlFor, client } from '../../lib/client'
import { motion } from 'framer-motion'
import ProductCard from '../../components/ProductCard'

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



const Shop = ({products, orders}) => {


  return (
	<div className="body shop">
      
      <div className="catagory">
        <ul>
          <li>ALL PRODUCT</li>
          <li>INSTOCK</li>
          <li>LATEST</li>
        </ul>
      </div>
      
      
      <ProductCard products={products} />
    
  </div>
  )
}

export const getStaticProps = async () => {
  const query = `*[_type == "product"]`;
  const data = await client.fetch(query);
  
  
  return {
    props: {products: data},
    revalidate: 10,
  }
}

export default Shop