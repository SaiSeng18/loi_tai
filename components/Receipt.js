import React, { useState } from 'react';
import Image from 'next/image';
import { images } from '../src/img';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { CgClose } from 'react-icons/cg';
import Link from 'next/link';
import { client } from '../lib/client';



const Receipt = ({data, pass, setPass}) => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false)
	const cart = useSelector((state) => state.cart)
	const orderData = cart.map((cart) => (`${cart.name} [${cart.color}, ${cart.size}, ${cart.quantity}] \n`))
	const orderDetail = orderData.toString();


	console.log(typeof(data.ph_no))

	const getTotalPrice = () => {
		return cart.reduce(
		  (accumulator, item) => accumulator + item.quantity * item.price,0
		);
	};

	

	const handleConfirm = () => {
		setLoading(true);

		const receipt = {
			_type: "orders",
			customerName: `${data.first_name} ${data.last_name}`,
			orderDetail: orderDetail,
			orderPrice: getTotalPrice(),
			phoneNumber: data.ph_no,
			email: data.email,
			address: `${data.city}, ${data.address}`
		}

		client.create(receipt)
		.then(() => {
			setLoading(false);
			setFormSubmitted(true);
		})
	}

  return (
	<div className="receipt">
		<CgClose className="close-icon" onClick={() => setPass(!pass)} />
		{!formSubmitted ?
		<div className="container">
			<div className="receipt-header">
				<div className="logo"><Image src={images.logomark} /></div>
				<div className="logotrademark"><Image src={images.loitai} /></div>
				<div className="empty"></div>
			</div>

			<div className="receipt-info">
				<p className="date">date&nbsp;&nbsp;&nbsp;:</p>
				<div className="telephone">
					<p className="tele">Telephone&nbsp;&nbsp;&nbsp;:</p>
					<div className="ph-no">
						<p>09&nbsp;799&nbsp;113&nbsp;135</p>
						<p>09&nbsp;445&nbsp;911&nbsp;447</p>
					</div>
				</div>
			</div>


			<table>
				<tbody>
					<tr>
						<td className="col-1">NAME<span className="colon">:</span></td>
						<td className="col-2">{`${data.first_name} ${data.last_name}`}</td>
					</tr>
					<tr className="order">
						<td className="col-1">Order<span className="colon">:</span></td>
						<td className="col-2">{
							cart.map((cart, index) => (
								<span key={index}>
									{cart.name} [{cart.color}, {cart.size}, {cart.quantity}]
									<br />
								</span>
								
							)
							)
						}</td>
					</tr>
					<tr>	
						<td className="col-1">PRICE<span className="colon">:</span></td>
						<td className="col-2">{`${getTotalPrice()} MMK`}</td>
					</tr>
					<tr>
						<td className="col-1">PHONE NUMBER<span className="colon">:</span></td>
						<td className="col-2">{data.ph_no}</td>
					</tr>
					<tr>
						<td className="col-1">EMAIL<span className="colon">:</span></td>
						<td className="col-2">{data.email}</td>
					</tr>
					<tr>
						<td className="col-1">ADDRESS<span className="colon">:</span></td>
						<td className="col-2">{`${data.city}, ${data.address}`}</td>
					</tr>
				</tbody>
			</table>
			<div className="note">
				<p>ALL PRICE ARE IN MMK</p>
			</div>

			<div className="term">
				<p>
					ALL SALES ARE FINAL. MEANING PURCHASED ITEMS CANNOT BE REFUNDED OR RETURNED.
					<br />
					ENJOY OUR PRODUCTS. HAVE A GREAT DAY.
					<br />
					DON&apos;T FORGET TO VISIT WWW.LOITAIGEAR.com
					<br />
					FOR MORE LT PRODUCTS.
				</p>
			</div>

			<p className="thank">THANK YOU FOR YOUR PURCHASE.</p>

			<button className="confirm-order" onClick={handleConfirm}>Confirm Order</button>
		</div> : 
		<div className="success">
			<h3>
				Your order has been made. Thank you for purchasing.
			</h3>
		</div>
		}
		
	</div>
  )
}

export default Receipt