import React from "react";

const JobDetail = ({ job }) => {
	const { job_desc, job_res, req, expr } = job;

	return (
		<div>
			<p className="text-[#757575] font-medium text-[16px]"><span className="text-[#1A1919] font-bold">Job Description:</span> {job_desc}</p>
			<p className="text-[#757575] font-medium text-[16px] my-6"><span className="text-[#1A1919] font-bold">Job Responsibility:</span> {job_res}</p>
            <div className="">
                <p className="text-[#1A1919] font-bold mb-4">Educational Requirements:</p>
                <p>{req}</p>
            </div>
            <div className="mt-6">
                <p className="text-[#1A1919] font-bold mb-4">Experiences:</p>
                <p>{expr}</p>
            </div>
		</div>
	);
};

export default JobDetail;
