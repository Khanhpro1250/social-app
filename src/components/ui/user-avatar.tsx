import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import avatarIcon from "@/assets/user-avatar.png";

interface UserAvatarProps {
  avatarUrl: string | null | undefined;
  size?: number;
  className?: string;
}
export default function UserAvatar({
  avatarUrl,
  className,
  size,
}: UserAvatarProps) {
  return (
    <Image
      src={avatarUrl || avatarIcon}
      alt=""
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className,
      )}
    />
  );
}
