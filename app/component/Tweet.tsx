import { auth } from "@/auth";
import { formatDistance } from "date-fns";

interface Props {
	id: string;
	userId: string;
	description: string;
	createdAt: Date;
}
const Tweet = async ({ description, createdAt }: Props) => {
	const session = await auth();
	return (
		<div className="rounded-xl px-2 my-4 w-1/2">
			<div className="h-auto border border-blue-200 hover:bg-blue-200 transition ease-in-out cursor-pointer px-4 py-6 rounded-xl">
				<p className="font-thin text-black whitespace-pre-line break-words">
					{description}
				</p>
				<div className="flex w-full items-center justify-between mt-6">
					<p className="font-magnat text-lg flex items-center">
						<img
							className="w-8 h-8 rounded-full object-cover mr-3"
							src={session?.user?.image!}
						/>
						{session?.user?.name}
					</p>
					<p className="text-sm font-light self-center">
						{formatDistance(new Date(createdAt), new Date())}
					</p>
				</div>
			</div>
		</div>
	);
};
export default Tweet;
