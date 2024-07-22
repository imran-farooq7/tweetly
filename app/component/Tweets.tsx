import prisma from "@/prisma/Prisma";
import Tweet from "./Tweet";

const Tweets = async () => {
	const tweets = await prisma.tweet.findMany();
	return (
		<div className="container mx-auto flex flex-col items-center">
			{tweets.map((tweet) => (
				<Tweet
					description={tweet.description}
					id={tweet.id}
					createdAt={tweet.createdAt}
					userId={tweet.userId}
					key={tweet.id}
				/>
			))}
		</div>
	);
};
export default Tweets;
