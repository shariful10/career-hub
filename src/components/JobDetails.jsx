import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
	// const jobData = useLoaderData();
	const dynamic = useParams();
	console.log(dynamic.id);
	const [job, setJob] = useState([]);

	useEffect(() => {
		fetch("featuredjob.json")
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);

	return (
		<div>
			<div className="gradient">
				<div className="my-container">
					<h1 className="text-5xl font-bold text-center pt-5 pb-16">Job Details</h1>
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
