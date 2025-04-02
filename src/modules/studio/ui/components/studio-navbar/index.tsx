import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "@/modules/auth/ui/components/auth-button";
import { StudioUploadModal } from "../studio-upload-modal";

export const StudioNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-b shadow-md">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and Logo */}
        <div className="flex items-center justify-between flex-0">
          <SidebarTrigger></SidebarTrigger>
          <Link href={"/studio"}>
            <div className="p-4 flex items-center gap-1">
              <Image
                width={32}
                height={32}
                alt="logo"
                src={"/logo.svg"}
              ></Image>
              <p className="tracking-tight text-xl font-semibold">Studio</p>
            </div>
          </Link>
        </div>

        {/* spacer */}
        <div className="flex-1" />

        {/* loging */}
        <div className="flex-shrink-0 flex items-center gap-4">
          <StudioUploadModal />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
