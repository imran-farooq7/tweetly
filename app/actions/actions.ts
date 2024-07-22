"use server";

import { auth } from "@/auth";
import prisma from "@/prisma/Prisma";
import { revalidatePath } from "next/cache";

export const createTweet = async (prevState: any, formData: FormData) => {
	const session = await auth();
	const tweet = String(formData.get("tweet"));
	if (session?.user) {
		const newTweet = await prisma.tweet.create({
			data: {
				description: tweet,
				userId: session.user.id!,
			},
		});
		revalidatePath("/");
		return {
			success: "Tweet created successfully",
		};
	} else {
		return {
			error: "Tweet creation failed",
		};
	}
};
