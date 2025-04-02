import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { LogOutIcon, VideoIcon } from "lucide-react";
import StudioSidebarHeader from "./studio-sidebar-header";

const StudioSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 " collapsible={"icon"}>
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarMenu>
            <StudioSidebarHeader />
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={"content"} asChild>
                <Link href={"/studio"}>
                  <VideoIcon className="size-5" />
                  <span className="text-sm">Content</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarSeparator />
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={"exit studio"} asChild>
                <Link href={"/"}>
                  <LogOutIcon className="size-5" />
                  <span className="text-sm">Exit studio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default StudioSidebar;
