import React from "react";

function sizeguide() {
	return (
		<div className="sizeguide body">
			<h1>BASIC LOGO T-SHIRT</h1>
			<div className="sizes small">
				S<p>WIDTH:21</p>
				<p>LENGTH:28</p>
				<p>SHOULDER:20</p>
			</div>
			<div className="sizes medium">
				M<p>WIDTH:22</p>
				<p>LENGTH:29</p>
				<p>SHOULDER:21</p>
			</div>
			<div className="sizes large">
				L<p>WIDTH:23</p>
				<p>LENGTH:30</p>
				<p>SHOULDER:22</p>
			</div>
			<div className="sizes xlarge">
				XL
				<p>WIDTH:24</p>
				<p>LENGTH:31</p>
				<p>SHOULDER:22.5</p>
			</div>
			{/* // Graffiti Tee */}
			<h1>GRAFFITI T-SHIRT</h1>
			<div className="sizes small">
				S<p>WIDTH:18</p>
				<p>LENGTH:26.5</p>
				<p>SHOULDER:19</p>
			</div>
			<div className="sizes medium">
				M<p>WIDTH:20</p>
				<p>LENGTH:27.5</p>
				<p>SHOULDER:20</p>
			</div>
			<div className="sizes large">
				L<p>WIDTH:22</p>
				<p>LENGTH:28.5</p>
				<p>SHOULDER:21</p>
			</div>
			<div className="sizes xlarge">
				XL
				<p>WIDTH:24</p>
				<p>LENGTH:29.5</p>
				<p>SHOULDER:21.5</p>
			</div>
		</div>
	);
}

export default sizeguide;
