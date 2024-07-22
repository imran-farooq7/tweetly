import { auth } from "@/auth";
import PostForm from "./component/PostForm";
import Tweets from "./component/Tweets";

export default async function Home() {
	const session = await auth();
	return (
		<>
			{session?.user && (
				<>
					<PostForm />
					<Tweets />
				</>
			)}
			{!session?.user && (
				<div className="text-center flex flex-col gap-2">
					<h2 className="text-4xl">Join Today</h2>
					<p>To share your tweet</p>
				</div>
			)}
		</>
	);
}
