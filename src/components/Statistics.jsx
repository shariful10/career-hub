import React from "react";
import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const Statistics = () => {
	const markData = [
		{
			id: 1,
			number: 60,
			name: "Assignment 1",
		},
		{
			id: 2,
			number: 56,
			name: "Assignment 2",
		},
		{
			id: 3,
			number: 49,
			name: "Assignment 3",
		},
		{
			id: 4,
			number: 60,
			name: "Assignment 4",
		},
		{
			id: 5,
			number: 51,
			name: "Assignment 5",
		},
		{
			id: 6,
			number: 42,
			name: "Assignment 6",
		},
		{
			id: 7,
			number: 58,
			name: "Assignment 7",
		},
	];

	return (
		<div>
			<div className="gradient">
				<div className="bg-img">
					<div className="my-container">
						<h1 className="text-5xl font-bold text-center pt-5 pb-[140px]">
							Statistics
						</h1>
					</div>
				</div>
			</div>
			<div className="my-[50px] md:my-[130px]">
				<div className="my-container">
					<ResponsiveContainer width="100%" height={400}>
						<ScatterChart
							margin={{
								top: 20,
								right: 20,
								bottom: 20,
								left: 20,
							}}>
							<CartesianGrid />
							<XAxis dataKey="name" />
							<YAxis dataKey="number" />
							<Tooltip cursor={{ strokeDasharray: "2 2" }} />
							<Scatter name="Name" data={markData} fill="#8884d8" />
						</ScatterChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
