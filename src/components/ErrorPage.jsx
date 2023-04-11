import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid'

const ErrorPage = () => {
    const { error, status } = useRouteError();

    return (
        <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<FaceFrownIcon className="w-40 h-40 text-[#9873FF]" />
				<div className="max-w-md text-center">
					<h2 className="mb-8 font-extrabold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
						<span className="sr-only">Error</span>
						{status || 404}
					</h2>
					<p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
						{error?.message}
					</p>
					<Link to="/" className="btn-small">
						Back to Home
					</Link>
				</div>
			</div>
		</section>
    );
};

export default ErrorPage;