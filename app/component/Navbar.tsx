"use client";
import { User } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
interface Props {
	user: User | null;
}

const Navbar = ({ user }: Props) => {
	return (
		<nav className="flex container items-center justify-between">
			<div className="flex items-center gap-2">
				<Image src={"/Tweetly.png"} width={100} height={100} alt="logo" />
			</div>
			<div>
				{!user && (
					<button
						onClick={() => signIn("github")}
						className="bg-cyan-400 px-6 text-white hover:opacity-70 py-2 rounded-lg"
					>
						Sign in
					</button>
				)}
				{user?.image && (
					<div className="flex gap-3 items-center">
						<Image
							src={user.image}
							width={45}
							height={45}
							className="rounded-full"
							alt="avatar"
						/>
						<button
							onClick={() => signOut()}
							className="bg-red-500 px-4 text-white hover:opacity-70 py-2 rounded-lg"
						>
							Sign out
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};
export default Navbar;
