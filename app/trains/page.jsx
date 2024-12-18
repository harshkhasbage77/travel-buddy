import Link from "next/link";

export const metadata = {
	title: "Train Trips",
};

const Page = () => {
	return (
		<div className="container text-center mt-5">
			<h1 className="mb-4">Welcome to Travel Buddy</h1>
			<h3>Find your travel partners for your next train ride</h3>
			<br />
			<h6>
				Enter your train journey details and find other travelers on the
				same train.
				<br />
				<br />
				Please <Link href="/trips">add trip(s)</Link> seperately to
				check for common trips to/from the stations.
			</h6>
			<br />
			<div className="d-flex justify-content-center gap-3 align-items-center flex-wrap mb-3">
				<Link href="/trains/create" className="btn btn-primary btn-lg">
					Enter New Train Details
				</Link>
				<Link
					href="/trains/my-trains"
					className="btn btn-primary btn-lg"
				>
					My Current Train Trips
				</Link>
			</div>
			<Link href="/" className="btn btn-secondary btn-lg">
				Back to Home
			</Link>
			<footer className="mt-5">
				<p>
					Please note that this application is made to help KGPians
					with similiar travel plans. Any data submitted here will be
					visible to others who input a similiar time slot. Please
					consider before submitting any personal information.
				</p>
				<h4 className="mt-8">
					Contribute to the project{" "}
					<a
						href="https://github.com/metakgp/travel-buddy"
						target="_blank"
					>
						here
					</a>
				</h4>
			</footer>
		</div>
	);
};

export default Page;
