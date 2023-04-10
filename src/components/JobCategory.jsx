import React from "react";

const JobCategory = () => {
	return (
		<div className="my-container">
			<div className="">
				<div className="mt-[82px] mb-8 text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-4">Job Category List</h2>
					<p className="text-[16px] text-[#757575] font-medium">
						Explore thousands of job opportunities with all the information you need.
						Its your future
					</p>
				</div>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					<div className="gradient p-10 rounded-lg shadow-lg">
						<img
							className="gradient-two p-[15px] rounded-lg mx-auto sm:mx-0"
							src="https://i.ibb.co/FgtSM2M/accounts.png"
							alt=""
						/>
						<div className="mt-8">
							<h4 className="text-[#474747] text-xl font-bold text-center sm:text-left">Account & Finance</h4>
							<p className="text-[#A3A3A3] text-[16px] font-medium text-center sm:text-left">Jobs Available</p>
						</div>
					</div>
					<div className="gradient p-10 rounded-lg shadow-lg">
						<img
							className="gradient-two p-[15px] rounded-lg mx-auto sm:mx-0"
							src="https://i.ibb.co/XsW6GQV/business.png"
							alt=""
						/>
						<div className="mt-8">
							<h4 className="text-[#474747] text-xl font-bold text-center sm:text-left">Creative Design</h4>
							<p className="text-[#A3A3A3] text-[16px] font-medium text-center sm:text-left">
								100+ Jobs Available
							</p>
						</div>
					</div>
					<div className="gradient p-10 rounded-lg shadow-lg">
						<img
							className="gradient-two p-[15px] rounded-lg mx-auto sm:mx-0"
							src="https://i.ibb.co/LSp49vT/social-media.png"
							alt=""
						/>
						<div className="mt-8">
							<h4 className="text-[#474747] text-xl font-bold text-center sm:text-left">Marketing & Sales</h4>
							<p className="text-[#A3A3A3] text-[16px] font-medium text-center sm:text-left">
								150 Jobs Available
							</p>
						</div>
					</div>
					<div className="gradient p-10 rounded-lg shadow-lg">
						<img
							className="gradient-two p-[15px] rounded-lg mx-auto sm:mx-0"
							src="https://i.ibb.co/YXbKMsN/engineering.png"
							alt=""
						/>
						<div className="mt-8">
							<h4 className="text-[#474747] text-xl font-bold text-center sm:text-left">Engineering Job</h4>
							<p className="text-[#A3A3A3] text-[16px] font-medium text-center sm:text-left">
								224 Jobs Available
							</p>
						</div>
					</div>
				</div>
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
