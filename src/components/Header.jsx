import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="gradient">
			<div className="my-container lg:py-12 flex justify-between items-center">
				{/* Logo Section */}
				<Link to="/" className="text-xl md:text-[32px] font-bold tracking-wide text-black">
					JobHunting
				</Link>
				<ul className="items-center hidden space-x-8 lg:flex">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? "active" : "default")}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/statistics"
							className={({ isActive }) => (isActive ? "active" : "default")}>
							Statistics
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/job-details"
							className={({ isActive }) => (isActive ? "active" : "default")}>
							Job Details
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/applied-jobs"
							className={({ isActive }) => (isActive ? "active" : "default")}>
							Applied Jobs
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/blog"
							className={({ isActive }) => (isActive ? "active" : "default")}>
							Blog
						</NavLink>
					</li>
				</ul>
				<div className="lg:hidden">
					{/* Dropdown Open Button */}
					<button
						aria-label="Open Menu"
						title="Open Menu"
						onClick={() => setIsMenuOpen(true)}>
						<Bars3BottomRightIcon className="w-5 text-gray-600" />
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full z-10">
							<div className="p-5 bg-white border rounded shadow-sm py-5">
								{/* Logo & Button section */}
								<div className="flex items-center justify-between mb-4">
									<div>
										<Link
											to="/"
											className="text-xl font-bold tracking-wide text-black">
											JobHunting
										</Link>
									</div>
									{/* Dropdown menu close button */}
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											onClick={() => setIsMenuOpen(false)}>
											<XMarkIcon className="w-5 text-black" />
										</button>
									</div>
								</div>
								{/* Mobile Nav Items Section */}
								<nav>
									<ul className="space-y-4">
										<li>
											<Link to="/" className="default">
												Home
											</Link>
										</li>
										<li>
											<Link
												to="/statistics"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">
												Statistics
											</Link>
										</li>
										<li>
											<Link
												to="/job-details"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">
												Job Details
											</Link>
										</li>
										<li>
											<Link
												to="/applied-jobs"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">
												Applied Jobs
											</Link>
										</li>
										<li>
											<Link
												to="/blog"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">
												Blog
											</Link>
										</li>
									</ul>
									<Link>
										<button className="btn-gradient mt-5">Star Applying</button>
									</Link>
								</nav>
							</div>
						</div>
					)}
				</div>
				<Link className="hidden lg:block">
					<button className="btn-gradient">Star Applying</button>
				</Link>
			</div>
		</div>
	);
};

export default Header;
