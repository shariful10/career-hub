import React from "react";

const AppliedJob = ({ j }) => {
	const { img, title, job_loc, job_time, location, salary } = j;

	return (
		<div className="my-container">
			<div className="md:flex border rounded-lg py-[30px] pl-[30px] pr-[47px] items-center">
				<img
					className="bg-[#F4F4F4] py-[75px] px-[47px] rounded-lg mx-auto md:mx-0 mb-8 md:mb-0 w-full md:w-48"
					src={img}
					alt=""
				/>
				<div className="ml-8 flex-grow">
					<h3 className="text-2xl text-[#474747] text-center md:text-left font-semibold">{title}</h3>
					<div className="flex gap-3 my-4">
						<button className="text-gradient border-gradient py-2 px-5 rounded-[4px] text-[16px] font-bold text-center sm:text-left">
							{job_loc}
						</button>
						<button className="text-gradient border-gradient py-2 px-5 rounded-[4px] text-[16px] font-bold text-center sm:text-left">
							{job_time}
						</button>
					</div>
					<div className="sm:flex gap-6">
						<div className="flex gap-1 justify-center sm:justify-start">
							<img src="https://i.ibb.co/Prqx36n/Location-2.png" alt="" />
							<p className="text-[16px] md:text-xl font-semibold text-[#757575]">
								{location}
							</p>
						</div>
						<div className="flex gap-1 justify-center sm:justify-start">
							<img src="https://i.ibb.co/LJMSkr0/salary-2nd.png" alt="" />
							<p className="text-[16px] md:text-xl font-semibold text-[#757575]">
								Salary: {salary}
							</p>
						</div>
					</div>
				</div>
				<div className="text-center sm:text-left">
					<button className="btn-small mt-6">View Details</button>
				</div>
			</div>
		</div>
	);
};

export default AppliedJob;
