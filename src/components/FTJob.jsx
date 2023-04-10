import React from "react";

const FTJob = ({ ftjob }) => {
	const { img, title, location, salary, com_name, job_loc, job_time } = ftjob;

	return (
		<div className="border p-10 rounded-lg">
			<img className="h-8 w-auto" src={img} alt="" />
			<h3 className="mb-2 mt-8 text-2xl font-bold text-[#474747]">{title}</h3>
            <p className="text-xl font-semibold text-[#757575]">{com_name}</p>
            <div className="flex gap-3 my-4">
                <button className="text-gradient border-gradient py-2 px-5 rounded-[4px] text-[16px] font-bold">{job_loc}</button>
                <button className="text-gradient border-gradient py-2 px-5 rounded-[4px] text-[16px] font-bold">{job_time}</button>
            </div>
			<div className="flex gap-6">
				<div className="flex gap-3">
                    <img src="https://i.ibb.co/Prqx36n/Location-2.png" alt="" />
					<p className="text-xl font-semibold text-[#757575]">{location}</p>
				</div>
				<div className="flex gap-1">
                    <img src="https://i.ibb.co/LJMSkr0/salary-2nd.png" alt="" />
					<p className="text-xl font-semibold text-[#757575]">Salary: {salary}</p>
				</div>
			</div>
            <button className="btn-small mt-6">View Details</button>
		</div>
	);
};

export default FTJob;
