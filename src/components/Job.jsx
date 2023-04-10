import React from "react";

const Job = ({ job }) => {
	const { img, title, desc } = job;

	return (
		<div className="gradient p-10 rounded-lg shadow-lg">
			<img className="gradient-two p-[15px] rounded-lg mx-auto sm:mx-0" src={img} alt="" />
			<div className="mt-8">
				<h4 className="text-[#474747] text-xl font-bold text-center sm:text-left">
					{title}
				</h4>
				<p className="text-[#A3A3A3] text-[16px] font-medium text-center sm:text-left">
					{desc}
				</p>
			</div>
		</div>
	);
};

export default Job;
