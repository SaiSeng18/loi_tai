import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { images } from "../../src/img";
import { urlFor, client } from "../../lib/client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/createSlice";
import ItemAdded from "../../components/notification/ItemAdded";
import Warning from "../../components/notification/Warning";

const Product = ({ data }) => {
	const [current, setCurrent] = useState(0);
	const [color, setColor] = useState();
	const [size, setSize] = useState();
	const [image, setImage] = useState();
	const [addItem, setAddItem] = useState(false);
	const [warning, setWarning] = useState(false);
	const dispatch = useDispatch();

	const [products] = data;

	const imgs = products.productImage;
	const colors = products.productColors;
	const sizes = products.productSizes;
	// console.log(products)
	const length = imgs.length;
	// const page = `${current + 1 } / ${length}`

	const cart = {
		id: products.productID,
		name: products.productName,
		detail: products.productDetail,
		price: products.productPrice,
		color: color,
		size: size,
		image: image,
	};
	// console.log(cart)

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(imgs) || length <= 0) {
		return null;
	}

	const validCart = () => {
		if (color == null || size == null) {
			setWarning(!warning);
			warning = false;
		} else {
			dispatch(addToCart(cart));
			setAddItem(!addItem);
		}
	};

	return (
		<div className="product">
			<div className="img-content">
				<div className="product-img">
					<FaChevronLeft
						color="#bebebe"
						className="back-arrow"
						onClick={prevSlide}
					/>
					{imgs.map((img, index) => (
						<div className={index === current ? "slide active" : "slide"} key={index}>
							{index === current && (
								<Image
									className="image"
									src={urlFor(imgs[index]).url()}
									height={600}
									width={600}
									key={img._key}
									alt="image"
								/>
							)}
						</div>
					))}
					<FaChevronRight
						color="#bebebe"
						className="next-arrow"
						onClick={nextSlide}
					/>
					{/* <p className="page">{page}</p> */}
				</div>

				<div className="product-detail">
					<h1>{products.productName}</h1>
					<p className="product-detail-text">{products.productDetail}</p>
					<p>{products.productPrice} MMK</p>
					<p className="color-text">Color</p>
					<div className="color">
						{colors.map((color, index) => (
							<label key={index}>
								<input
									type="radio"
									name="color"
									key={index}
									id="color"
									value={color.productColor}
									onChange={(e) => setColor(e.target.value)}
								/>
								<img
									src={urlFor(color.productColorImg)}
									alt=""
									onClick={(e) => setImage(color.productColorImg)}
								/>
							</label>
						))}
					</div>
					<div className="size">
						<div className="size-head">
							<p>Select Size</p>
							<Link href="/sizeguide">
								<a>Size Guide</a>
							</Link>
						</div>

						<div className="sizes">
							{sizes.map((size, index) => (
								<label key={index}>
									<input
										type="radio"
										name="size"
										key={index}
										id="size"
										value={size}
										onChange={(e) => setSize(e.target.value)}
									/>
									<p className="label">{size}</p>
								</label>
							))}
						</div>
					</div>

					{products.productStock ? (
						<button onClick={() => validCart()}>Add to cart</button>
					) : (
						<p className="stock">Out of stock</p>
					)}
				</div>
			</div>
			{addItem && <ItemAdded addItem={addItem} setAddItem={setAddItem} />}
			{warning && <Warning warning={warning} setWarning={setWarning} />}
		</div>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "product"]`;
	const data = await client.fetch(query);

	const paths = data.map((product) => {
		return {
			params: { id: product._id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const query = '*[_id == "' + id + '"]';

	const data = await client.fetch(query);
	console.log(data);

	return {
		props: { data: data },
		revalidate: 10,
	};
};

export default Product;
