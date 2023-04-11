import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FTJob from "./FTJob";

const FeaturedJobs = ({ handleAddToCart }) => {
	const featuredjob = useLoaderData([]);
	const [showAll, setShowAll] = useState(false);

	const handleShowAll = () => {
		setShowAll(true);
	};

	return (
		<div className="my-container mb-[110px]">
			<div>
				<div className="mt-[80px] md:mt-[130px] mb-8 text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Jobs</h2>
					<p className="text-[16px] text-[#757575] font-medium">
						Explore thousands of job opportunities with all the information you need.
						Its your future
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-6">
					{featuredjob.slice(0, showAll ? 6 : 4).map((ftjob) => (
						<FTJob
							key={ftjob.id}
							ftjob={ftjob}></FTJob>
					))}
				</div>
			</div>
			<div className="text-center">
				<button onClick={handleShowAll} className="btn-gradient mt-10">
					See All Jobs
				</button>
			</div>
		</div>
	);
};

export default FeaturedJobs;
