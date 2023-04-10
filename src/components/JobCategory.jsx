import React from "react";
import { useLoaderData } from "react-router-dom";
import Job from "./Job";

const JobCategory = () => {
	const jobList = useLoaderData([]);
	console.log(jobList);

	return (
		<div className="my-container">
			<div className="mt-[82px] mb-8 text-center">
				<h2 className="text-3xl md:text-5xl font-bold mb-4">Job Category List</h2>
				<p className="text-[16px] text-[#757575] font-medium">
					Explore thousands of job opportunities with all the information you need. Its
					your future
				</p>
			</div>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{jobList.map((job) => (
					<Job key={job.id} job={job}></Job>
				))}
			</div>
			<div className="mt-[130px] mb-8 text-center">
				<h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Jobs</h2>
				<p className="text-[16px] text-[#757575] font-medium">
					Explore thousands of job opportunities with all the information you need. Its
					your future
				</p>
			</div>
		</div>
	);
};

export default JobCategory;
