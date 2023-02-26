import React from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

// Ticket model
export interface ticketsProps {
	source: string;
	destination: string;
}

export default function Home() {
	const tickets: ticketsProps[] = [
		{
			source: 'Amsterdam',
			destination: 'Berlin',
		},
		{
			source: 'Paris',
			destination: 'London',
		},
		{
			source: 'London',
			destination: 'Amsterdam',
		},
	];

	const extractToStringWithSet = (array: ticketsProps[]) => {
		const cities: string[] = [];
		// Reverted array multiple times to match requirements
		const reverted = [...array].reverse();

		// Loop through each of the tickets and add them to cities[]
		reverted.map(({ source, destination }, index) => {
			cities.push(source, destination);
		});

		//Use of Set to store unique values
		return Array.from(new Set(cities.reverse())).reverse().join(', ');
	};

	const extractToStringWithFilter = (array: ticketsProps[]) => {
		const cities: string[] = [];
		// Reverted array multiple times to match requirements
		const reverted = [...array].reverse();

		// Loop through each of the tickets and add them to cities[]
		reverted.map(({ source, destination }, index) => {
			cities.push(source, destination);
		});

		//Use of filter to compare values
		return cities
			.filter((item, index) => cities.lastIndexOf(item) === index)
			.join(', ');
	};

	//console print, also it displays in the front
	console.log(`Set: ${extractToStringWithSet(tickets)}`);
	console.log(`Filter: ${extractToStringWithFilter(tickets)}`);

	return (
		<>
			<NextSeo
				title="Global Saving Group - Enrique Valles"
				description="Global Saving Group Task"
				openGraph={{
					title: 'Task | Home',
					description: 'Global Saving Group Task',
				}}></NextSeo>

			<main className="bg-gray-500 min-h-screen">
				<section className="px-4 py-16 mx-auto max-w-4xl">
					<div className="text-center mb-16">
						<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
							Global Saving Group - Task
						</h1>
						<p className="mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-200">
							Enrique Valles Leyva
						</p>
					</div>

					<div className="mb-16 bg-white rounded-sm p-2">
						<h2 className="mb-4 text-md text-black font-semibold">
							Requirements:
						</h2>
						<blockquote className="text-black italic">
							<h3>Intro:</h3>
							<p className="mb-2">
								One travel agency faced a problem with corrupted database,
								containing customer's trips. IT department was able to recover
								tickets linked to specific users. Unfortunately, tickets contain
								only source and destination cities without any other
								information. Help travel agency to restore original trip for
								specific users.
							</p>
							<h3>Task:</h3>
							<p className="mb-2">
								Write a function that accepts array of tickets, where ticket has
								format {'source: string, destination: string'} and returns
								string of comma separated&nbsp;
								<span className="text-red-600 font-semibold">countries</span>
								<span className="text-green-600 font-semibold">
									&nbsp;(cities)
								</span>
								&nbsp; as it was originally planned. Example: tickets:&nbsp;
								{
									'[{source: "Amsterdam", destination: "Berlin"}, {source: "Paris", destination: "London"}, {source: "London", destination: "Amsterdam"},]'
								}
							</p>
							<p className="font-medium">
								result: 'Paris, London, Amsterdam, Berlin'
							</p>
						</blockquote>
					</div>

					<div className="mb-16 bg-white rounded-sm p-2">
						<h2 className="mb-4 text-md text-black font-semibold">Outcome:</h2>
						<code className="text-black italic px-4 bg-yellow-100 block">
							<b>Set:</b> {extractToStringWithSet(tickets)}
						</code>
						<code className="text-black italic px-4 bg-yellow-100 block">
							<b>Filter:</b> {extractToStringWithFilter(tickets)}
						</code>
					</div>

					{tickets && (
						<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
							<table className="w-full text-sm text-left text-gray-400">
								<thead className="text-xs uppercase bg-gray-700 text-gray-400">
									<tr>
										<th scope="col" className="px-6 py-3">
											Name
										</th>
										<th scope="col" className="px-6 py-3">
											Flight Number
										</th>
										<th scope="col" className="px-6 py-3">
											Source
										</th>
										<th scope="col" className="px-6 py-3">
											Destination
										</th>
									</tr>
								</thead>
								<tbody>
									{tickets.map(({ source, destination }, index) => (
										<tr
											key={index}
											className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
											<th
												scope="row"
												className="flex items-center px-6 py-4 whitespace-nowrap text-white">
												<Image
													width={40}
													height={40}
													className="w-10 h-10 rounded-full"
													src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
													alt="Person picture"
												/>
												<div className="pl-3">
													<div className="text-base font-semibold">-</div>
												</div>
											</th>
											<td className="px-6 py-4">-</td>
											<td className="px-6 py-4">{source}</td>
											<td className="px-6 py-4">{destination}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</section>
			</main>
		</>
	);
}
