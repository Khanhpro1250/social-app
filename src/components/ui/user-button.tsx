"use client";

import { logout } from "@/app/(auth)/actions";
import { useSession } from "@/app/(main)/providers/SessionProvider";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
	DropdownMenuSub,
	DropdownMenuPortal,
	DropdownMenuSubContent
} from "@/components/ui/dropdown-menu";
import UserAvatar from "@/components/ui/user-avatar";
import { cn } from "@/lib/utils";

import { CheckIcon, LogOutIcon, Monitor, MoonIcon, SunIcon, UserIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

interface UserButtonProps {
	className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
	const { session, user } = useSession();
	const { theme, setTheme } = useTheme();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className={cn("flex-none rounded-full", className)}>
					<UserAvatar avatarUrl={user?.avatarUrl} size={40} />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Logged in as @{user.username}</DropdownMenuLabel>
				<Link href={`/users/${user.username}`}>
					<DropdownMenuItem>
						<UserIcon className="mr-2 size-4" /> Profile
					</DropdownMenuItem>
				</Link>
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>
						<Monitor className="mr-2 size-4" /> Theme
					</DropdownMenuSubTrigger>
					<DropdownMenuPortal>
						<DropdownMenuSubContent>
							<DropdownMenuItem onClick={() => setTheme('light')}>
								<SunIcon className="mr-2 size-4" />Light
								{theme === 'light' && <CheckIcon className="ml-2 size-4" />}
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('dark')}>
								<MoonIcon className="mr-2 size-4" /> Dark
								{theme === 'dark' && <CheckIcon className="ml-2 size-4" />}

							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('system')}>
								<Monitor className="mr-2 size-4" /> System default
								{theme === 'system' && <CheckIcon className="ml-2 size-4" />}

							</DropdownMenuItem>
						</DropdownMenuSubContent>
					</DropdownMenuPortal>
				</DropdownMenuSub>
				<DropdownMenuSeparator />

				<DropdownMenuItem onClick={()=> logout()}>
					<LogOutIcon className="mr-2 size-4" /> Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
