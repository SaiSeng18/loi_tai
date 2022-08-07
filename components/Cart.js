import React, {useState} from 'react'
import {CgClose} from 'react-icons/cg';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { urlFor, client } from '../lib/client';
import {
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
} from '../redux/createSlice'
import Link from 'next/link';

import {HiPlus, HiMinus} from 'react-icons/hi'
import Checkout from '../pages/checkout';
import EmptyWarning from './notification/EmptyWarning';

const Cart = ({ handleCart}) => {

	const cart = useSelector((state) => state.cart)
	const dispatch = useDispatch();

	const [empty, setEmpty] = useState(false)

	const getTotalPrice = () => {
		return cart.reduce(
		  (accumulator, item) => accumulator + item.quantity * item.price,0
		);
	};

	const validCart = () => {
		if(cart.length == 0) {
			setEmpty(!empty)
		}
	}

	return (
		<motion.div className="cart-bg"
		key="cart-bg"
		initial={{opacity: 0}}
		animate={{opacity: 1}}
		exit={{opacity: 0}}
		transition={{

			opacity: { duration: .5 },
			default: { ease: "linear" }
		}}
		>
			<motion.div className="cart"
			key="cart"
			initial={{x: "100%"}}
			animate={{x: 0}}
			exit={{x: "100%"}}
			transition={{
				x: { duration: 0.3 },
				default: { ease: "linear" }
			}}
			>
				<div className="cart-head">
					<div>Shopping Cart</div>
					<button onClick={handleCart}><CgClose className="cross"/></button>
				</div>

				{
					cart.length === 0 ? <h1>Your Cart Is Empty</h1> : (
						<>
							{cart.map((item, index) => 
								<div className="cart-product" key={index}>
									<div className="cart-img">
										<img src={urlFor(item.image)} className="img" />
									</div>
									<div className="cart-detail">
										<div className="cart-price">
											<h3>{item.name}</h3>
											<p>{`${item.price* item.quantity} MMK`}</p>
										</div>
										<div className="cart-color">
											<p>{item.color}</p>
											<p>{`Size - ${item.size}`}</p>
										</div>
										<div className="qty-btn">
											<div style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
												<HiMinus style={{paddingRight: '5px', cursor: 'pointer'}} onClick={() => dispatch(decrementQuantity(item))}/>
												<div className="cart-qty">{item.quantity}</div>
												<HiPlus style={{paddingLeft: '5px', cursor: 'pointer'}} onClick={() => dispatch(incrementQuantity(item))}/>
											</div>
											<button disabled={cart.length <= 0} onClick={() => dispatch(removeFromCart(item.id))}>remove</button>
										</div>
									</div>
								</div>
							)}
						</>
					)
				}

				
				

				<div className="total">
					<div className="subtotal">Total</div>
					<div className="total-num"><p>{`${getTotalPrice()} MMK`}</p></div>
				</div>

				<Link href={cart.length <= 0 ? {} : "/checkout"} passHref>
					<button onClick={() => validCart()} className="checkout">Check Out</button>
				</Link>
				<Link href={"/shop"} passHref>
					<div className="continue-shopping">
						<button onClick={handleCart}>Continue Shopping</button>
					</div>
				</Link>	
					{empty && <EmptyWarning setEmpty={setEmpty} empty={empty} />}
			</motion.div>
		</motion.div>
	)
}

export default Cart