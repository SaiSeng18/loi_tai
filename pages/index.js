import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { images } from "../src/img";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

import { motion, useAnimation } from "framer-motion";

const container = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5,
			delayChildren: 0.3,
			staggerChildren: 0.3,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export default function Home() {
	const text = "An expression of youth...";

	return (
		<div className="body">
			<div className="content-1">
				<p>{text}</p>
			</div>

			<div className="card">
				<Swiper
					direction={"horizontal"}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Autoplay]}
					className="card-swiper"
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}>
					<SwiperSlide>
						<div className="swiper-img-container">
							<Image src={images.female} alt="image" layout="fill" objectFit="cover" />
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="swiper-img-container">
							<Image src={images.male} alt="image" layout="fill" objectFit="cover" />
						</div>
					</SwiperSlide>
				</Swiper>

				<motion.div
					variants={container}
					whileInView="visible"
					initial="hidden"
					viewport={{ once: true, amount: 0.5 }}
					className="content-container">
					<motion.h1 key={1} variants={item}>
						LOI TAI - SS01
					</motion.h1>
					<motion.p key={2} variants={item} className="content">
						LT&apos;s first season is called &apos;Dynamics&apos;. <br /> Check out
						some of our looks ranging from the studio to the streets. <br /> See how
						our basic tees are worn…
					</motion.p>
					<Link href="/shop" passHref>
						<motion.a key={3} variants={item}>
							Visit Links
						</motion.a>
					</Link>
				</motion.div>
			</div>

			<div className="card">
				<Swiper
					direction={"horizontal"}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Autoplay]}
					className="card-swiper"
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}>
					<SwiperSlide>
						<div className="swiper-img-container">
							<Image src={images.black3} alt="image" layout="fill" objectFit="cover" />
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="swiper-img-container">
							<Image src={images.black4} alt="image" layout="fill" objectFit="cover" />
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="swiper-img-container">
							<Image src={images.white3} alt="image" layout="fill" objectFit="cover" />
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="swiper-img-container">
							<Image src={images.white4} alt="image" layout="fill" objectFit="cover" />
						</div>
					</SwiperSlide>
				</Swiper>

				<motion.div
					variants={container}
					whileInView="visible"
					initial="hidden"
					viewport={{ once: true, amount: 0.5 }}
					className="content-container">
					<motion.h1 key={1} variants={item}>
						FIRST PRODUCTS
					</motion.h1>
					<motion.p key={2} variants={item} className="content">
						Introducing our first products.
						<br />
						Showcasing our two first original tees. Stay tuned for upcoming products.
					</motion.p>
					<Link href="/shop" passHref>
						<motion.a key={3} variants={item}>
							Visit Links
						</motion.a>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
