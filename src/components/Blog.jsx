import React from "react";

const Blog = () => {
	return (
		<div>
			<div className="bg-[#7E90FE0D]">
				<h1 className="text-5xl font-bold text-center pt-5 pb-5 md:pb-16">Blog</h1>
			</div>
			<div className="my-[50px] md:my-[130px]">
				<div className="my-container">
					<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
						<div className="bg-[#7E90FE0D] shadow-lg p-8 border border-blue-300 rounded-lg">
							<h2 className="text-2xl font-medium mb-5">
								When should use context API?
							</h2>
							<p>
								The Context API can be used in situations where you need to share
								data between components in a more efficient and scalable way than
								using props. However, it's important to use it judiciously, since
								overuse of context can lead to an overly complicated and
								hard-to-maintain codebase.
							</p>
						</div>
						<div className="bg-[#7E90FE0D] shadow-lg p-8 border border-blue-300 rounded-lg">
							<h2 className="text-2xl font-medium mb-5">What is custom hook?</h2>
							<p>
								A custom hook is a function in React that allows you to reuse
								stateful logic across multiple components. It's a way to extract
								logic from a component so that it can be reused in other components
								without duplicating code.
							</p>
						</div>
						<div className="bg-[#7E90FE0D] shadow-lg p-8 border border-blue-300 rounded-lg">
							<h2 className="text-2xl font-medium mb-5">What is useRef?</h2>
							<p>
								The useRef is a powerful tool that enables you to access and
								manipulate DOM elements and store values that persist across renders
								in a simple and declarative way.
							</p>
						</div>
						<div className="bg-[#7E90FE0D] shadow-lg p-8 border border-blue-300 rounded-lg">
							<h2 className="text-2xl font-medium mb-5">What is useMemo?</h2>
							<p>
								The useMemo is a powerful tool that enables you to optimize the
								performance of your React components by memoizing the result of
								expensive computations and avoiding wasteful re-renders.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
