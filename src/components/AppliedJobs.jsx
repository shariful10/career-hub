import React from "react";
import { getStoredCart } from "../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
	const jData = useLoaderData();
	console.log(jData);

	let jobs = [];
	const savedJob = getStoredCart();
	for (const id in savedJob) {
		const foundJob = jData.find((jb) => jb.id === JSON.parse(id));
		if (foundJob) {
			jobs.push(foundJob);
		}
	}
	console.log(jobs);

	return (
		<div>
			<div className="gradient">
				<div className="bg-img">
					<div className="my-container">
						<h1 className="text-5xl font-bold text-center pt-5 pb-[140px]">
							Applied Job
						</h1>
					</div>
				</div>
			</div>
			<div className="my-[50px] md:my-[130px]">
				<div className="my-container">
					<div className="p-5 rounded-lg bg-[#F4F4F4] w-32">
						<select className="bg-[#F4F4F4] focus:outline-none text-xl font-medium">
							<option
								className="p-5 text-[#474747] text-[16px] md:text-xl font-medium"
								value="">
								Filter
							</option>
							<option
								className="p-5 text-[#474747] text-[16px] md:text-xl font-medium"
								value="">
								Remote
							</option>
							<option
								className="p-5 text-[#474747] text-[16px] md:text-xl font-medium"
								value="Onsite">
								Onsite
							</option>
						</select>
					</div>
				</div>
				<div className="">
					{jobs.map((j) => (
						<AppliedJob j={j}></AppliedJob>
					))}
				</div>
			</div>
		</div>
	);
};

export default AppliedJobs;
