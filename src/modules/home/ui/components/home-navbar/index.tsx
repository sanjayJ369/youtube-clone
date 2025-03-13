import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import AuthButton from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and Logo */}
        <div className="flex items-center justify-between flex-0">
          <SidebarTrigger></SidebarTrigger>
          <Link href={"/"}>
            <div className="p-4 flex items-center gap-1">
              <Image
                width={32}
                height={32}
                alt="logo"
                src={"/logo.svg"}
              ></Image>
              <p className="tracking-tight text-xl font-semibold">NewTube</p>
            </div>
          </Link>
        </div>

        {/* search bar */}
        <div className="flex-1 justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>

        {/* loging */}
        <div className="flex-shrink-0 flex items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
