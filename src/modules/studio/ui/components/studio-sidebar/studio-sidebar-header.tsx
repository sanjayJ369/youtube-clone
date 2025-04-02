"use client";

import {
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import UserAvatar from "@/components/user-avatar";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const StudioSidebarHeader = () => {
  const { user } = useUser();
  const { state } = useSidebar();

  if (state === "collapsed") {
    if (!user) {
      return (
        <SidebarHeader className="flex items-center justify-center pb-4">
          <Skeleton className="h-5 w-5 rounded-full" />
        </SidebarHeader>
      );
    }
    return (
      <SidebarMenuItem>
        <SidebarMenuButton tooltip={"your profile"} asChild>
          <Link href={"/users/current"}>
            <UserAvatar
              imageurl={user.imageUrl}
              name={user.fullName ?? "user"}
              size={"xs"}
            />
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  if (!user) {
    return (
      <SidebarHeader className="flex items-center justify-center pb-4">
        <Skeleton className="size-[112px] rounded-full" />
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="h-4 w-[80px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </SidebarHeader>
    );
  }

  return (
    <SidebarHeader className="flex items-center justify-center pb-4">
      <Link href={"/users/current"}>
        <UserAvatar
          imageurl={user?.imageUrl}
          name={user?.fullName ?? "user"}
          className="size-[112px] hover:opacity-80 transition-opacity"
        />
      </Link>
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm font-medium">Your Profile</p>
        <p className="text-xs text-muted-foreground">{user.fullName}</p>
      </div>
    </SidebarHeader>
  );
};

export default StudioSidebarHeader;
