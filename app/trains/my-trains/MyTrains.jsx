"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/app/utils/Loading";

const MyTrains = () => {
	const [myTrains, setMyTrains] = useState(null);
	const router = useRouter();

	const getDetails = async () => {
		const res = await fetch("/api/trains/find", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (res.ok) {
			const json = await res.json();
			setMyTrains(json.trains);
		} else {
			const json = await res.json();
			alert(json.message);
			router.push("/trains");
		}
	};

	useEffect(() => {
		getDetails();
	}, []);

	const handleSearch = (id) => {
		router.push(`/trains/train/${id}`);
	};

	return myTrains ? (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="card shadow-lg p-4">
						<h2 className="text-center mb-4">My Train Trips</h2>
						{myTrains.length > 0 ? (
							<table className="table-auto mt-3 text-center">
								<thead>
									<tr>
										<th>Train Trip ID</th>
										<th>Train Number</th>
										<th>Date</th>
									</tr>
								</thead>
								<tbody>
									{myTrains.map((train, idx) => (
										<tr
											key={idx}
											onClick={() =>
												handleSearch(train.trainID)
											}
											className="cursor-pointer hover:bg-gray-100 transition"
										>
											<td>{train.trainID}</td>
											<td>{train.trainNumber}</td>
											<td>{train.date}</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<p>No trains found</p>
						)}
						<Link href="/trains/create">
							<button className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
								Enter New Train Details
							</button>
						</Link>
						<Link href="/trains">
							<button className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
								Back to Trains Page
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	) : (
		<Loading />
	);
};

export default MyTrains;