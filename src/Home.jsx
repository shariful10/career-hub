import React from "react";

const Home = () => {
	return (
		<div className="bg-[#7E90FE0D]">
			<div className="my-container grid sm:grid-cols-2 gap-12 md:gap-16">
				<div className="order-2 sm:order-1 mb-5 md:mb-0">
					<h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold">
						One Step Closer To Your <span className="text-gradient">Dream Job</span>
					</h1>
					<p className="text-[18px] text-[#757575] mt-6 mb-8">
						Explore thousands of job opportunities with all the information you need.
						Its your future. Come find it. Manage all your job application from start to
						finish.
					</p>
					<button className="btn-gradient">Get Started</button>
				</div>
				<div className="order-1 sm:order-2">
					<img className="w-full" src="../public/assets/all-images/cover.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Home;
