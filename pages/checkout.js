import React, {useState} from 'react'
import { urlFor, client } from '../lib/client'
import { CgClose } from 'react-icons/cg';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Receipt from '../components/Receipt';


const Checkout = ({orders}) => {
	const {register, handleSubmit} = useForm();
	const [data, setData] = useState("");
	const [pass, setPass] = useState(false);
	const passData = (data) => {

		if(Object.keys(data).length !== 0) {
			setData(data)
			setPass(!pass)
		}
	}

	return (
		<div className="checkout-form">
			<div className="container">
				<Link href={"/shop"} passHref><CgClose className="close-icon" /></Link>
				<h1>Checkout Form</h1>
				<form onSubmit={handleSubmit((data) => passData(data))}>
					<div className="first-name block">
						<label htmlFor="first_name">First Name</label>
						<input type="text" {...register("first_name")} id="first-name" placeholder="First Name" required/>
					</div>

					<div className="last-name block">
						<label htmlFor="last_name">Last Name</label>
						<input type="text" {...register("last_name")} id="last-name" placeholder="Last Name" required/>
					</div>

					<div className="city block">
						<label htmlFor="address">City</label>
						<input type="text" {...register("city")} id="city" placeholder="City" required />
					</div>
					

					<div className="address block">
						<label htmlFor="address">Address</label>
						<input type="text" {...register("address")} id="address" placeholder="Address" required />
					</div>

					<div className="email block">
						<label htmlFor="email">Email</label>
						<input type="email" {...register("email")} id="email" placeholder="Email" required/>
					</div>

					<div className="ph-no block">
						<label htmlFor="ph_no">Phone Number</label>
						<input type="text" {...register("ph_no")} id="ph-no" placeholder="Phone Number" required/>
					</div>

					
					<button type="submit">Submit</button>
				</form>
			</div>
			{pass && <Receipt data={data} pass={pass} setPass={setPass} />}
		</div>
	)
}

export default Checkout;