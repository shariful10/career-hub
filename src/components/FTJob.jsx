import React from "react";
import { Link } from "react-router-dom";

const FTJob = ({ ftjob }) => {
	const { id, img, title, location, salary, com_name, job_loc, job_time } = ftjob;

	return (
		<div className="border p-10 rounded-lg">
			<img className="h-8 w-auto mx-auto sm:mx-0" src={img} alt="" />
			<h3 className="mb-2 mt-8 text-2xl font-bold text-[#474747] text-center sm:text-left">
				{title}
			</h3>
			<p className="text-xl font-semibold text-[#757575] text-center sm:text-left">
				{com_name}
			</p>
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
					<p className="text-xl font-semibold text-[#757575]">{location}</p>
				</div>
				<div className="flex gap-1 justify-center sm:justify-start">
					<img src="https://i.ibb.co/LJMSkr0/salary-2nd.png" alt="" />
					<p className="text-xl font-semibold text-[#757575]">Salary: {salary}</p>
				</div>
			</div>
			<Link to={`ftjob/${id}`}>
				<div className="text-center sm:text-left">
					<button className="btn-small mt-6">View Details</button>
				</div>
			</Link>
		</div>
	);
};

export default FTJob;
