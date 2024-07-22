"use client";
import { useActionState, useEffect } from "react";
import { createTweet } from "../actions/actions";
import toast from "react-hot-toast";

const PostForm = () => {
	const [state, action, isPending] = useActionState(createTweet, null);
	useEffect(() => {
		if (state?.success) {
			toast.success(state.success);
		} else {
			toast.error(state?.error!);
		}
	}, [state?.error, state?.success]);

	return (
		<form action={action} className="max-w-md mx-auto mt-20 p-6">
			<div className="mb-4">
				<label className="block text-gray-700 font-bold mb-2" htmlFor="tweet">
					Tweet:
				</label>
				<textarea
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="tweet"
					rows={5}
					minLength={10}
					maxLength={200}
					placeholder="write your tweet here"
					name="tweet"
				></textarea>
			</div>

			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
				type="submit"
				disabled={isPending}
			>
				{isPending ? "Tweeting..." : "Submit"}
			</button>
		</form>
	);
};
export default PostForm;
