import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobDetail from "./JobDetail";
import "./JobDetails.css";

const JobDetails = () => {
	const dynamic = useParams();
	console.log(dynamic.id);
	const [job, setJob] = useState([]);

	useEffect(() => {
		fetch("/featuredjob.json")
			.then((res) => res.json())
			.then((data) => {
				const jobData = data.find((job) => job.id === JSON.parse(dynamic.id));
				setJob(jobData);
			});
	}, []);
	console.log(job);

	return (
		<div>
			<div className="gradient">
				<div className="bg-img">
					<div className="my-container">
						<h1 className="text-5xl font-bold text-center pt-5 pb-[140px]">
							Job Details
						</h1>
					</div>
				</div>
			</div>
			<div className="my-[50px] md:my-[130px]">
				<div className="my-container grid md:grid-cols-3 gap-6">
					<div className="md:col-span-2">
						<JobDetail job={job}></JobDetail>
					</div>
					<div className="">
						<div className="p-[30px] bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-lg">
							<div>
								<h2 className="text-xl text-[#1A1919] font-bold">Job Details</h2>
								<div className="my-6">
									<hr />
								</div>
								<div className="flex">
									<img src="https://i.ibb.co/ZVw6pMk/salary.png" alt="" />
									<p className="text-[16px] md:text-xl text-[#757575] font-semibold">
										<span className="text-[#474747] font-bold ml-2">
											Salary :{" "}
										</span>
										{job.salary} (Per Month)
									</p>
								</div>
								<div className="flex mt-4">
									<img src="https://i.ibb.co/85qpP3Q/job-title.png" alt="" />
									<p className="text-[16px] md:text-xl text-[#757575] font-semibold">
										<span className="text-[#474747] font-bold ml-2">Job Title : </span>
										{job.job_title}
									</p>
								</div>
							</div>
							<div className="mt-8">
								<h2 className="text-xl text-[#1A1919] font-bold">
									Contact Information
								</h2>
								<div className="my-6">
									<hr />
								</div>
								<div className="flex">
									<img src="https://i.ibb.co/sVY7T63/phone.png" alt="" />
									<p className="text-[16px] md:text-xl text-[#757575] font-semibold">
										<span className="text-[#474747] font-bold ml-2">
											Phone :{" "}
										</span>
										{job.phone}
									</p>
								</div>
								<div className="flex my-4">
									<img src="https://i.ibb.co/HFnmQ9G/mail.png" alt="" />
									<p className="text-[16px] md:text-xl text-[#757575] font-semibold">
										<span className="text-[#474747] font-bold ml-2">
											Email :{" "}
										</span>
										{job.email}
									</p>
								</div>
								<div className="flex">
									<img src="https://i.ibb.co/VV2vc1m/location.png" alt="" />
									<p className="text-[16px] md:text-xl text-[#757575] font-semibold">
										<span className="text-[#474747] font-bold ml-2">
											Address :{" "}
										</span>
										{job.address}
									</p>
								</div>
							</div>
						</div>
						<button className="btn-apply">Apply Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
