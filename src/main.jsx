import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./Home";
import Blog from "./components/Blog";
import Main from "./components/Layout/Main";
import Statistics from "./components/Statistics";
import AppliedJobs from "./components/AppliedJobs";
import JobCategory from "./components/JobCategory";
import FeaturedJobs from "./components/FeaturedJobs";
import JobDetails from "./components/JobDetails";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				children: [
					{
						path: "/",
						element: <JobCategory />,
						loader: () => fetch("joblist.json"),
						children: [
							{
								path: "/",
								element: <FeaturedJobs />,
								loader: () => fetch("featuredjob.json"),
							},
						],
					},
				],
			},
			{
				path: "ftjob/:id",
				element: <JobDetails />,
			},
			{
				path: "/statistics",
				element: <Statistics />,
			},
			{
				path: "/applied-jobs",
				element: <AppliedJobs />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
