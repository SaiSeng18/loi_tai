import React from "react";
import Link from "next/link";

const Burgermenu = ({ handleToggle }) => {
	return (
		<div className="burger-menu">
			<li>
				<a onClick={handleToggle}>BACK</a>

				<ul>
					<Link href="/">
						<div onClick={handleToggle} className="home-page">
							HOME
						</div>
					</Link>
					<li>
						<Link href="/">
							<div onClick={handleToggle}>LT | SS01</div>
						</Link>
					</li>
				</ul>
			</li>

			<li>
				<a onClick={handleToggle}>SHOP</a>
				<ul>
					<li>
						<Link href="/shop/">
							<div onClick={handleToggle}>ALL PRODUCT</div>
						</Link>
					</li>
					<li>
						<Link href="/shop/">
							<div onClick={handleToggle}>IN STOCK</div>
						</Link>
					</li>
					<li>
						<Link href="/shop/">
							<div>LATEST</div>
						</Link>
					</li>
				</ul>
			</li>

			<li>
				<a onClick={handleToggle}>FOCUS</a>
				<ul>
					<li>
						<Link href="/focus/archive">
							<a onClick={handleToggle}>ARCHIVE</a>
						</Link>
					</li>
					<li>
						<Link href="/focus/lookbook">
							<a onClick={handleToggle}>LOOKBOOK</a>
						</Link>
					</li>
				</ul>
			</li>

			<li>
				<a onClick={handleToggle}>EXTRA</a>
				<ul>
					<li>
						<Link href="/extra/subscribe">
							<a onClick={handleToggle}>SUBSCRIBE</a>
						</Link>
					</li>
					<li>
						<Link href="/extra/stockist">
							<a onClick={handleToggle}>STOCKIST</a>
						</Link>
					</li>
					<li>
						<Link href="/extra/terms">
							<a onClick={handleToggle}>TERMS</a>
						</Link>
					</li>
				</ul>
			</li>
		</div>
	);
};

export default Burgermenu;
