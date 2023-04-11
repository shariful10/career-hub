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
			<input type="checkbox" name="rw" id="yr" />
			<div className="">
				{jobs.map((j) => <AppliedJob j={j}></AppliedJob>)}
				
			</div>
		</div>
	);
};

export default AppliedJobs;
