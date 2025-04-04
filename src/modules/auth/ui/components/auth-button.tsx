"use client";
import { Button } from "@/components/ui/button";
import { ClapperboardIcon, UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

const AuthButton = () => {
  return (
    <>
      <SignedIn>
        {/* TODO: add user profile menu button */}
        {/* add menu items for studio and profile */}
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link
              label={"Studio"}
              href={"/studio"}
              labelIcon={<ClapperboardIcon className="size-4" />}
            />
            <UserButton.Action label="manageAccount" />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode={"modal"}>
          <Button
            variant={"outline"}
            className="px-4 py-2 text-sm font-medium text-blue-400
          hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&_svg]:size-5"
          >
            <UserCircleIcon />
            Sign-in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default AuthButton;
